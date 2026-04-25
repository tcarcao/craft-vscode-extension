import { Uri } from 'vscode';
import { LanguageClient } from 'vscode-languageclient/node';
import {
    LspExtractionResult,
    LspDomainRef,
    ServerCommands
} from '../../../shared/lib/types/domain-extraction.js';
import {
    Domain,
    DomainC,
    DSLDiscoveryOptions,
    DSLDiscoveryResult,
    Service,
    ServiceGroup,
    BoundedContext,
} from '../types/domain.js';
import { Logger } from '../utils/Logger.js';

export class DslExtractService {
    constructor(private readonly languageClient: LanguageClient) {}

    async discoverDSL(options: DSLDiscoveryOptions = {}): Promise<DSLDiscoveryResult> {
        try {
            let currentResult: LspExtractionResult | null = null;
            if (options.currentFile) {
                const uri = Uri.file(options.currentFile).toString();
                currentResult = await this.languageClient.sendRequest('workspace/executeCommand', {
                    command: ServerCommands.EXTRACT_DOMAINS_FROM_CURRENT,
                    arguments: [uri],
                });
            }

            const workspaceResult: LspExtractionResult | null =
                await this.languageClient.sendRequest('workspace/executeCommand', {
                    command: ServerCommands.EXTRACT_DOMAINS_FROM_WORKSPACE,
                    arguments: [],
                });

            Logger.debug('workspaceResult', workspaceResult);

            if (!workspaceResult) {
                return { domains: [], serviceGroups: [] };
            }

            const domains = this.convertToDomainStructure(workspaceResult, currentResult);
            const serviceGroups = this.convertToServiceGroups(workspaceResult, currentResult, domains);

            return { domains, serviceGroups };
        } catch (error) {
            Logger.error('Error discovering domains:', error);
            throw error;
        }
    }

    private convertToDomainStructure(
        result: LspExtractionResult,
        currentResult: LspExtractionResult | null,
    ): Domain[] {
        const currentBCNames = new Set<string>(
            (currentResult?.services ?? []).flatMap(s => s.domains?.map(d => d.bcName) ?? [])
        );

        // Map<domainName, Map<bcName, LspDomainRef>>
        const domainMap = new Map<string, Map<string, LspDomainRef>>();

        for (const svc of result.services ?? []) {
            for (const ref of svc.domains ?? []) {
                if (!domainMap.has(ref.name)) {
                    domainMap.set(ref.name, new Map());
                }
                domainMap.get(ref.name)!.set(ref.bcName, ref);
            }
        }

        const domains: Domain[] = [];

        for (const [domainName, bcMap] of domainMap) {
            const boundedContexts: BoundedContext[] = [...bcMap.values()].map(ref => ({
                id: DomainC.GenerateContextId(domainName, ref.bcName),
                name: ref.bcName,
                description: `Bounded Context: ${ref.bcName}`,
                expanded: false,
                showReferences: false,
                selected: true,
                partiallySelected: false,
                focused: true,
                inCurrentFile: currentBCNames.has(ref.bcName),
                useCases: [],
                referencedIn: [],
                selectedUseCases: 0,
                totalUseCases: 0,
            }));

            domains.push({
                id: DomainC.GenerateDomainId(domainName),
                name: domainName,
                description: `Domain: ${domainName}`,
                expanded: domainName === DomainC.DefaultDomain,
                selected: true,
                partiallySelected: false,
                inCurrentFile: boundedContexts.some(bc => bc.inCurrentFile),
                boundedContexts,
                selectedUseCases: 0,
                totalUseCases: 0,
                selectedBoundedContexts: boundedContexts.length,
            });
        }

        return domains.sort((a, b) => {
            if (a.name === DomainC.DefaultDomain && b.name !== DomainC.DefaultDomain) return 1;
            if (b.name === DomainC.DefaultDomain && a.name !== DomainC.DefaultDomain) return -1;
            return a.name.localeCompare(b.name);
        });
    }

    private convertToServiceGroups(
        result: LspExtractionResult,
        currentResult: LspExtractionResult | null,
        domains: Domain[],
    ): ServiceGroup[] {
        const currentServiceNames = new Set<string>(
            (currentResult?.services ?? []).map(s => s.name)
        );

        const groupMap = new Map<string, Service[]>();

        for (const svc of result.services ?? []) {
            const parentDomainName = svc.domains?.[0]?.name ?? DomainC.DefaultDomain;
            const domain = domains.find(d => d.name === parentDomainName) ?? DomainC.EmptyDomain;
            const bcNames = (svc.domains ?? []).map(d => d.bcName);
            const boundedContexts = domain.boundedContexts.filter(bc => bcNames.includes(bc.name));

            const service: Service = {
                id: DomainC.GenerateServiceId(parentDomainName, bcNames[0] ?? '', svc.name),
                name: svc.name,
                domain,
                boundedContexts,
                dependencies: [],
                selected: true,
                partiallySelected: false,
                focused: true,
                inCurrentFile: currentServiceNames.has(svc.name),
                expanded: false,
                blockRange: { startLine: 0, endLine: 0, fileUri: '' },
            };

            if (!groupMap.has(parentDomainName)) {
                groupMap.set(parentDomainName, []);
            }
            groupMap.get(parentDomainName)!.push(service);
        }

        return [...groupMap.entries()].map(([name, services]) => ({
            name,
            services,
            expanded: false,
            selected: false,
            partiallySelected: false,
            inCurrentFile: services.some(s => s.inCurrentFile),
        }));
    }
}
