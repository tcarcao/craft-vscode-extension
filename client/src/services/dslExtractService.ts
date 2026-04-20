// src/services/domainService.ts
import { Uri } from 'vscode';
import { LanguageClient } from 'vscode-languageclient/node';
import {
    UseCaseInfo,
    FileResult,
    ExtractionResult,
    ServerCommands
} from '../../../shared/lib/types/domain-extraction';
import { Domain, DomainC, DSLDiscoveryOptions, DSLDiscoveryResult, Service, ServiceGroup, BoundedContext, UseCase, UseCaseReference } from '../types/domain';
import { ServicesViewService } from './servicesViewService';
import { Logger } from '../utils/Logger';

export class DslExtractService {
    private readonly servicesViewService = new ServicesViewService();
    
    constructor(private readonly languageClient: LanguageClient) { }

    async discoverDSL(options: DSLDiscoveryOptions = {}): Promise<DSLDiscoveryResult> {
        try {
            // Get domains from current file if specified
            let currentFileResult: ExtractionResult | null = null;
            if (options.currentFile) {
                const currentFileUri = Uri.file(options.currentFile).toString();
                currentFileResult = await this.languageClient.sendRequest('workspace/executeCommand', {
                    command: ServerCommands.EXTRACT_DOMAINS_FROM_CURRENT,
                    arguments: [currentFileUri]
                });
            }

            // Get domains from entire workspace
            const workspaceResult: ExtractionResult = await this.languageClient.sendRequest('workspace/executeCommand', {
                command: ServerCommands.EXTRACT_DOMAINS_FROM_WORKSPACE,
                arguments: []
            });

            Logger.debug('workspaceResult', workspaceResult);

            // Convert the results to Domain structure
            const domains = this.convertToDomainStructure(workspaceResult, currentFileResult);
            const serviceGroups = this.convertToServiceGroups(workspaceResult, currentFileResult, domains);

            return { domains, serviceGroups };
        } catch (error) {
            Logger.error('Error discovering domains:', error);
            throw error;
        }
    }

    private convertToDomainStructure(
        workspaceResult: ExtractionResult,
        currentFileResult: ExtractionResult | null
    ): Domain[] {
        Logger.debug('convertToDomainStructure, workspaceResult', workspaceResult);
        if (workspaceResult.error) {
            throw new Error(workspaceResult.error);
        }

        // Group bounded contexts by their parent domain
        const domainGroups = new Map<string, string[]>();
        const currentFileUriSet = currentFileResult ? new Set(currentFileResult.domains || []) : new Set();

        // Process each discovered domain as a bounded context
        workspaceResult.domains.forEach((contextName: string) => {
            // Get parent domain from parsing results, fallback to Unknown
            const parentDomain = this.getParentDomainFromResults(workspaceResult, contextName);

            if (!domainGroups.has(parentDomain)) {
                domainGroups.set(parentDomain, []);
            }
            domainGroups.get(parentDomain)!.push(contextName);
        });

        const domains: Domain[] = [];

        // Create a top-level domain for each group
        domainGroups.forEach((contextNames, parentDomainName) => {
            const domain: Domain = {
                id: DomainC.GenerateDomainId(parentDomainName),
                name: parentDomainName,
                description: `Domain: ${parentDomainName}`,
                expanded: parentDomainName === DomainC.DefaultDomain, // Auto-expand Unknown
                selected: true,
                partiallySelected: false,
                inCurrentFile: contextNames.some(name => currentFileUriSet.has(name)),
                boundedContexts: [],
                selectedUseCases: 0,
                totalUseCases: 0,
                selectedBoundedContexts: 0,
            };

            // Create bounded contexts (parsed domains become bounded contexts)
            contextNames.forEach((contextName: string) => {
                const boundedContext: BoundedContext = {
                    id: DomainC.GenerateContextId(parentDomainName, contextName),
                    name: contextName,
                    description: `Bounded Context: ${contextName}`,
                    expanded: false,
                    showReferences: false,
                    selected: true,
                    partiallySelected: false,
                    focused: true, // Default to focused (show as internal in C4)
                    inCurrentFile: currentFileUriSet.has(contextName),
                    useCases: [],
                    selectedUseCases: 0,
                    referencedIn: [],
                    totalUseCases: 0,
                };

                // Get all use cases for this bounded context from all files
                const useCasesForContext = this.getUseCasesForContext(workspaceResult, parentDomainName, contextName);

                useCasesForContext.forEach(useCase => {
                    boundedContext.useCases.push(useCase);
                });

                const useCasesWhereContextIsInvolved = this.getUseCasesWhereContextIsInvolved(workspaceResult, parentDomainName, contextName);

                useCasesWhereContextIsInvolved.forEach(useCase => {
                    boundedContext.referencedIn.push(useCase);
                });

                // Update bounded context counters
                boundedContext.totalUseCases = boundedContext.useCases.length;
                boundedContext.selectedUseCases = boundedContext.useCases.filter(uc => uc.selected).length;

                domain.boundedContexts.push(boundedContext);
            });

            // Update domain counters after all bounded contexts are processed
            domain.totalUseCases = domain.boundedContexts.reduce((total, bc) => total + bc.totalUseCases, 0);
            domain.selectedUseCases = domain.boundedContexts.reduce((total, bc) => total + bc.selectedUseCases, 0);
            domain.selectedBoundedContexts = domain.boundedContexts.filter(bc => bc.selected).length;

            domains.push(domain);
        });

        return domains.sort((a, b) => {
            // Sort so that "Unknown" comes last, others alphabetically
            if (a.name === DomainC.DefaultDomain && b.name !== DomainC.DefaultDomain) { return 1; }
            if (b.name === DomainC.DefaultDomain && a.name !== DomainC.DefaultDomain) { return -1; }
            return a.name.localeCompare(b.name);
        });
    }

    private getParentDomainFromResults(
        workspaceResult: ExtractionResult,
        contextName: string
    ): string {
        // FIRST PRIORITY: Check domain definitions - this is the new functionality
        if (workspaceResult.domainDefinitions) {
            for (const domainDef of workspaceResult.domainDefinitions) {
                if (domainDef.subDomains.includes(contextName)) {
                    return domainDef.name;
                }
            }
        }

        // Check file-level domain definitions as well
        if (workspaceResult.fileResults) {
            for (const fileResult of workspaceResult.fileResults) {
                if (fileResult.domainDefinitions) {
                    for (const domainDef of fileResult.domainDefinitions) {
                        if (domainDef.subDomains.includes(contextName)) {
                            return domainDef.name;
                        }
                    }
                }
            }
        }


        return DomainC.DefaultDomain;
    }

    private getUseCasesForContext(
        workspaceResult: ExtractionResult,
        parentDomainName: string,
        contextName: string
    ): UseCase[] {
        const useCases: UseCase[] = [];

        if (workspaceResult.fileResults) {
            workspaceResult.fileResults.forEach((fileResult: FileResult) => {
                if (fileResult.useCases) {
                    fileResult.useCases.forEach((useCaseInfo: UseCaseInfo) => {
                        // Include use case if this bounded context is the primary context or involved
                        if (useCaseInfo.entryPointSubDomain === contextName) {
                            useCases.push({
                                id: DomainC.GenerateUseCaseId(parentDomainName, contextName, useCaseInfo.name),
                                name: useCaseInfo.name,
                                description: this.generateUseCaseDescription(useCaseInfo, fileResult.fileName),
                                selected: true,
                                fileName: fileResult.fileName,
                                blockRange: useCaseInfo.blockRange,
                                scenarios: useCaseInfo.scenarios || [],
                                involvedContexts: useCaseInfo.allDomains || [contextName],
                                entryPointContext: contextName
                            });
                        }
                    });
                }
            });
        }

        return useCases;
    }

    private getUseCasesWhereContextIsInvolved(
        workspaceResult: ExtractionResult, parentDomainName: string, contextName: string): UseCaseReference[] {
        const useCases: UseCaseReference[] = [];

        if (workspaceResult.fileResults) {
            workspaceResult.fileResults.forEach((fileResult: FileResult) => {
                if (fileResult.useCases) {
                    fileResult.useCases.forEach((useCaseInfo: UseCaseInfo) => {

                        if (useCaseInfo.entryPointSubDomain !== contextName && useCaseInfo.allDomains && useCaseInfo.allDomains.includes(contextName)) {

                            useCases.push({
                                useCaseId: DomainC.GenerateUseCaseId(parentDomainName, contextName, useCaseInfo.name),
                                useCaseName: useCaseInfo.name,
                                domainName: useCaseInfo.entryPointSubDomain,
                                blockRange: useCaseInfo.blockRange,
                                role: 'involved'
                            });
                        }
                    });
                }
            });
        }

        return useCases;
    }

    private generateUseCaseDescription(useCaseInfo: UseCaseInfo, fileName: string): string {
        let description = "";

        if (useCaseInfo.allDomains && useCaseInfo.allDomains.length > 1) {
            description += `\nInvolved Domains: ${useCaseInfo.allDomains.join(', ')}`;
        }

        if (fileName) {
            description += `\nFile: ${fileName}`;
        }

        return description;
    }

    convertToServiceGroups(
workspaceResult: ExtractionResult, currentFileResult: ExtractionResult | null, domains: Domain[],
    ): ServiceGroup[] {

        const serviceDefinitions = workspaceResult.serviceDefinitions;
        const currentFileUriSet = currentFileResult ? new Set(currentFileResult.serviceDefinitions.map(s => s.name) || []) : new Set();

        // Group services by parent domain (using domain definitions)
        const groupedServices = serviceDefinitions.reduce((groups, service) => {
            // Find parent domain from domain definitions for any of the service's domains
            let parentDomain = DomainC.DefaultDomain;
            if (service.domains && service.domains.length > 0) {
                for (const serviceDomain of service.domains) {
                    const foundParentDomain = this.getParentDomainFromResults(workspaceResult, serviceDomain);
                    if (foundParentDomain !== DomainC.DefaultDomain) {
                        parentDomain = foundParentDomain;
                        break; // Use the first non-Unknown parent domain found
                    }
                }
            }
            const groupName = parentDomain;
            const domain = domains.find(d => d.name === parentDomain) || DomainC.EmptyDomain;
            const boundedContexts = domain.boundedContexts.filter(bc => service.domains.some(otherBc => otherBc === bc.name));

            if (!groups[groupName]) {
                groups[groupName] = [];
            }

            const serviceAsService: Service = {
                id: DomainC.GenerateServiceId(groupName, service.domains[0] || "", service.name),
                name: service.name,
                domain: domain,
                boundedContexts: boundedContexts,
                // dataStores: service.dataStores,
                // language: service.language,
                dependencies: [],
                blockRange: service.blockRange,
                selected: true,
                partiallySelected: false,
                focused: true, // Default to focused (show as internal in C4)
                inCurrentFile: currentFileUriSet.has(service.name),
                expanded: false
            };

            groups[groupName].push(serviceAsService);
            return groups;
        }, {} as Record<string, Service[]>);

        // Convert grouped services to ServiceGroup array
        const serviceGroups = Object.entries(groupedServices).map(([groupName, services]) => {
            return {
                name: groupName,
                services: services,
                expanded: false,
                selected: false, // Will be calculated properly below
                partiallySelected: false, // Will be calculated properly below
                inCurrentFile: services.map(s => s.name).some(name => currentFileUriSet.has(name))
            };
        });

        // Calculate proper selection states for all service groups based on their children
        serviceGroups.forEach(serviceGroup => {
            this.servicesViewService.updateServiceGroupSelection(serviceGroup);
        });

        return serviceGroups;
    }
}