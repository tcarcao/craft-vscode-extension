import { Uri } from 'vscode';
import { LanguageClient } from 'vscode-languageclient/node';
import {
    BlockRange,
    CraftExtractionResult,
    ServerCommands,
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
            const currentFileUri = options.currentFile
                ? Uri.file(options.currentFile).toString()
                : undefined;

            const result: CraftExtractionResult | null =
                await this.languageClient.sendRequest('workspace/executeCommand', {
                    command: ServerCommands.CRAFT_EXTRACT_WORKSPACE,
                    arguments: currentFileUri ? [currentFileUri] : [],
                });

            Logger.debug('CRAFT_EXTRACT_WORKSPACE result', result);

            if (!result) {
                return { domains: [], serviceGroups: [], actorBlocks: [], archBlocks: [] };
            }

            const domains = this.buildDomains(result);
            this.buildUseCasesIntoDomains(result, domains);
            domains.sort((a, b) => {
                if (a.name === DomainC.DefaultDomain) return 1;
                if (b.name === DomainC.DefaultDomain) return -1;
                return a.name.localeCompare(b.name);
            });
            const serviceGroups = this.buildServiceGroups(result, domains);
            const actorBlocks = this.buildActorBlocks(result);
            const archBlocks = this.buildArchBlocks(result);

            return { domains, serviceGroups, actorBlocks, archBlocks };
        } catch (error) {
            Logger.error('Error discovering DSL:', error);
            throw error;
        }
    }

    private buildDomains(result: CraftExtractionResult): Domain[] {
        return (result.domains ?? [])
            .map(d => {
                const boundedContexts: BoundedContext[] = (d.boundedContexts ?? []).map(bc => ({
                    id: DomainC.GenerateContextId(d.name, bc.name),
                    name: bc.name,
                    description: `Bounded Context: ${bc.name}`,
                    expanded: false,
                    showReferences: false,
                    selected: true,
                    partiallySelected: false,
                    focused: true,
                    inCurrentFile: d.inCurrentFile,
                    useCases: [],
                    referencedIn: [],
                    selectedUseCases: 0,
                    totalUseCases: 0,
                }));

                return {
                    id: DomainC.GenerateDomainId(d.name),
                    name: d.name,
                    description: `Domain: ${d.name}`,
                    expanded: d.name === DomainC.DefaultDomain,
                    selected: true,
                    partiallySelected: false,
                    inCurrentFile: d.inCurrentFile,
                    boundedContexts,
                    selectedUseCases: 0,
                    totalUseCases: 0,
                    selectedBoundedContexts: boundedContexts.length,
                };
            })
            .sort((a, b) => {
                if (a.name === DomainC.DefaultDomain && b.name !== DomainC.DefaultDomain) return 1;
                if (b.name === DomainC.DefaultDomain && a.name !== DomainC.DefaultDomain) return -1;
                return a.name.localeCompare(b.name);
            });
    }

    private buildServiceGroups(result: CraftExtractionResult, domains: Domain[]): ServiceGroup[] {
        const domainByBC = new Map<string, Domain>();
        for (const d of domains) {
            for (const bc of d.boundedContexts) {
                domainByBC.set(bc.name, d);
            }
        }

        const groupMap = new Map<string, Service[]>();

        for (const svc of result.services ?? []) {
            const primaryDomain =
                svc.contexts.map(ctx => domainByBC.get(ctx)).find(d => d !== undefined) ??
                DomainC.EmptyDomain;

            const boundedContexts = (svc.contexts ?? [])
                .map(ctx => primaryDomain.boundedContexts.find(bc => bc.name === ctx))
                .filter((bc): bc is BoundedContext => bc !== undefined);

            const service: Service = {
                id: DomainC.GenerateServiceId(
                    primaryDomain.name,
                    svc.contexts[0] ?? '',
                    svc.name
                ),
                name: svc.name,
                domain: primaryDomain,
                boundedContexts,
                dependencies: [],
                selected: true,
                partiallySelected: false,
                focused: true,
                inCurrentFile: svc.inCurrentFile,
                expanded: false,
                blockRange: {
                    fileUri: svc.uri,
                    startLine: svc.startLine,
                    endLine: svc.endLine,
                },
            };

            if (!groupMap.has(primaryDomain.name)) {
                groupMap.set(primaryDomain.name, []);
            }
            groupMap.get(primaryDomain.name)!.push(service);
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

    private buildUseCasesIntoDomains(result: CraftExtractionResult, domains: Domain[]): void {
        if (!result.useCases?.length) return;

        // Build a lookup from context name → (domain, boundedContext) for explicitly declared domains.
        const bcByName = new Map<string, { domain: Domain; bc: BoundedContext }>();
        for (const domain of domains) {
            for (const bc of domain.boundedContexts) {
                bcByName.set(bc.name, { domain, bc });
            }
        }

        // Tracks named BCs created under the Unknown domain so they can be reused.
        const unknownContextByName = new Map<string, { domain: Domain; bc: BoundedContext }>();

        const getOrCreateUnknownDomain = (): Domain => {
            let unknownDomain = domains.find(d => d.name === DomainC.DefaultDomain);
            if (!unknownDomain) {
                unknownDomain = {
                    id: DomainC.GenerateDomainId(DomainC.DefaultDomain),
                    name: DomainC.DefaultDomain,
                    description: '',
                    expanded: true,
                    selected: true,
                    partiallySelected: false,
                    inCurrentFile: false,
                    boundedContexts: [],
                    selectedUseCases: 0,
                    totalUseCases: 0,
                    selectedBoundedContexts: 0,
                };
                domains.push(unknownDomain);
            }
            return unknownDomain;
        };

        // Returns a BC under the Unknown domain, using the context's real name when available.
        // Empty contextName → generic "Unknown" BC. Named contextName → named BC under Unknown domain.
        const getOrCreateContextUnderUnknown = (contextName: string): { domain: Domain; bc: BoundedContext } => {
            const bcName = contextName || DomainC.DefaultDomain;
            const existing = unknownContextByName.get(bcName);
            if (existing) return existing;

            const unknownDomain = getOrCreateUnknownDomain();
            const bc: BoundedContext = {
                id: DomainC.GenerateContextId(DomainC.DefaultDomain, bcName),
                name: bcName,
                description: '',
                expanded: false,
                showReferences: false,
                selected: true,
                partiallySelected: false,
                focused: true,
                inCurrentFile: false,
                useCases: [],
                referencedIn: [],
                selectedUseCases: 0,
                totalUseCases: 0,
            };
            unknownDomain.boundedContexts.push(bc);
            const entry = { domain: unknownDomain, bc };
            unknownContextByName.set(bcName, entry);
            return entry;
        };

        for (const uc of result.useCases) {
            const entryContextName = uc.entryPointContext ?? '';
            const target = bcByName.get(entryContextName) ?? getOrCreateContextUnderUnknown(entryContextName);
            const domainName = target.domain.name;
            const contextName = target.bc.name;

            target.bc.useCases.push({
                id: DomainC.GenerateUseCaseId(domainName, contextName, uc.name),
                name: uc.name,
                description: `Use case: ${uc.name}`,
                selected: true,
                fileName: uc.uri,
                blockRange: { fileUri: uc.uri, startLine: uc.startLine, endLine: uc.endLine },
                scenarios: [],
                entryPointContext: contextName,
                involvedContexts: uc.involvedContexts ?? [],
                inCurrentFile: uc.inCurrentFile,
            });

            if (uc.inCurrentFile) {
                target.bc.inCurrentFile = true;
                target.domain.inCurrentFile = true;
            }

            // Register use case as a reference on all involved contexts (including undeclared ones).
            for (const involvedName of uc.involvedContexts ?? []) {
                if (involvedName === entryContextName) continue;
                const involvedEntry = bcByName.get(involvedName) ?? getOrCreateContextUnderUnknown(involvedName);
                involvedEntry.bc.referencedIn.push({
                    useCaseId: DomainC.GenerateUseCaseId(domainName, contextName, uc.name),
                    useCaseName: uc.name,
                    domainName,
                    blockRange: { fileUri: uc.uri, startLine: uc.startLine, endLine: uc.endLine },
                    role: 'involved',
                });
            }
        }

        // Update counts on all affected domains
        for (const domain of domains) {
            let total = 0, selected = 0;
            for (const bc of domain.boundedContexts) {
                bc.totalUseCases = bc.useCases.length;
                bc.selectedUseCases = bc.useCases.filter(u => u.selected).length;
                total += bc.totalUseCases;
                selected += bc.selectedUseCases;
            }
            domain.totalUseCases = total;
            domain.selectedUseCases = selected;
        }
    }

    private buildActorBlocks(result: CraftExtractionResult): BlockRange[] {
        return result.actorBlocks ?? [];
    }

    private buildArchBlocks(result: CraftExtractionResult): BlockRange[] {
        return (result.archs ?? []).map(arch => ({
            fileUri: arch.uri,
            startLine: arch.startLine,
            endLine: arch.endLine,
        }));
    }
}
