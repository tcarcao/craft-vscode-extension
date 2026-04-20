import { BlockRange } from '../../../shared/lib/types/domain-extraction';

export interface DSLDiscoveryOptions {
    currentFile?: string;
    includeDataStores?: boolean;
    includeScenarios?: boolean;
}

export interface DSLDiscoveryResult {
    domains: Domain[];
    serviceGroups: ServiceGroup[];
}

const defaultDomain = 'Unknown';

export const DomainC = {
    DefaultDomain: defaultDomain,
    EmptyDomain: emptyDomain(),
    GenerateDomainId: generateDomainId,
    GenerateContextId: generateContextId,
    GenerateUseCaseId: generateUseCaseId,
    GenerateServiceId: generateServiceId,
};

export interface Domain {
    id: string;
    name: string;
    description: string;
    expanded: boolean;
    selected: boolean;
    partiallySelected: boolean;
    inCurrentFile: boolean;
    boundedContexts: BoundedContext[];
    selectedUseCases: number;
    totalUseCases: number;
    selectedBoundedContexts: number;
}

function emptyDomain() {
    const emptyDomain: Domain = {
        id: generateDomainId(defaultDomain),
        name: defaultDomain,
        description: '',
        expanded: false,
        selected: false,
        partiallySelected: false,
        inCurrentFile: false,
        boundedContexts: [],
        selectedUseCases: 0,
        totalUseCases: 0,
        selectedBoundedContexts: 0
    };
    return emptyDomain;
}

function generateDomainId(domainName: string): string {
    return `domain-${domainName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
}

export interface BoundedContext {
    id: string;
    name: string;
    description: string;
    expanded: boolean;
    showReferences: boolean;
    selected: boolean;
    partiallySelected: boolean;
    focused: boolean; // New property for C4 focus mode
    inCurrentFile: boolean;
    useCases: UseCase[];
    referencedIn: UseCaseReference[];
    selectedUseCases: number;
    totalUseCases: number;
}

function generateContextId(domainName: string, contextName: string): string {
    const cleanContextName = contextName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `${generateDomainId(domainName)}-context-${cleanContextName}`;
}

export interface UseCaseReference {
    useCaseId: string;
    useCaseName: string;
    domainName: string;
    blockRange: BlockRange;
    role: 'entry-point' | 'involved';
}

export interface UseCase {
    id: string;
    name: string;
    description: string;
    selected: boolean;
    fileName: string;
    blockRange: BlockRange;
    scenarios: string[];
    entryPointContext: string;
    involvedContexts: string[];
}

function generateUseCaseId(domainName: string, contextName: string, useCaseName: string): string {
    const cleanUseCaseName = useCaseName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `${generateContextId(domainName, contextName)}-uc-${cleanUseCaseName}`;
}

export interface DomainTreeState {
    currentFileDomains: Map<string, Domain>;
    workspaceDomains: Map<string, Domain>;
    expandedNodes: Set<string>;
    selectedNodes: Set<string>;
    viewMode: 'current' | 'workspace';
    currentFile?: string;
    isLoading: boolean;
}

export interface Service {
    id: string;
    name: string;
    description?: string;
    domain: Domain;
    boundedContexts: BoundedContext[];
    dependencies: string[];
    tags?: string[];
    selected: boolean;
    partiallySelected: boolean;
    focused: boolean; // New property for C4 focus mode
    inCurrentFile: boolean;
    expanded: boolean;
    blockRange: BlockRange;
}

function generateServiceId(domainName: string, contextName: string, serviceName: string): string {
    const cleanServiceName = serviceName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `${generateContextId(domainName, contextName)}-s-${cleanServiceName}`;
}

export interface ServiceGroup {
    name: string;
    services: Service[];
    expanded: boolean;
    selected: boolean;
    partiallySelected: boolean;
    inCurrentFile: boolean;
}

export interface ServiceTreeState {
    currentFileServiceGroups: Map<string, ServiceGroup>;
    workspaceServiceGroups: Map<string, ServiceGroup>;
    viewMode: 'current' | 'workspace';
    boundariesMode: 'transparent' | 'boundaries';
    showDatabases: boolean;
    optionsExpanded: boolean;
    expandedNodes: Set<string>;
    selectedNodes: Set<string>;
    currentFile?: string;
    isLoading: boolean;
}