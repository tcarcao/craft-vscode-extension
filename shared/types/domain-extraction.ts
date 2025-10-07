export interface BlockRange {
  startLine: number;
  endLine: number;
  fileUri: string;
}

export interface UseCaseInfo {
    name: string;
    entryPointSubDomain: string | null;
    allDomains: string[];
    scenarios: string[];
    blockRange: BlockRange;
}
export interface ServiceDefinition {
    name: string;
    domains: string[];
    dataStores?: string[];
    language?: string;
    blockRange: BlockRange;
}

export interface DomainDefinition {
    name: string;
    subDomains: string[];
    blockRange: BlockRange;
}

export interface ActorDefinition {
    name: string;
    type: 'user' | 'system' | 'service';
    blockRange: BlockRange;
}

export interface FileResult {
    domains: string[];
    useCases: UseCaseInfo[];
    serviceDefinitions: ServiceDefinition[];
    domainDefinitions: DomainDefinition[];
    actorDefinitions: ActorDefinition[];
    uri: string;
    fileName: string;
}

// Workspace extraction result (combines all files)
export interface ExtractionResult {
    // Combined data from all files
    domains: string[];
    useCases: UseCaseInfo[];
    serviceDefinitions: ServiceDefinition[];
    domainDefinitions: DomainDefinition[];
    actorDefinitions: ActorDefinition[];
    
    // Individual file results
    fileResults: FileResult[];
    
    // Error handling
    error?: string;
}

// Command request/response types
export const ServerCommands = {
  EXTRACT_DOMAINS_FROM_CURRENT: 'craft.extractDomains',
  EXTRACT_DOMAINS_FROM_WORKSPACE: 'craft.extractAllDomainsFromWorkspace',
  EXTRACT_PARTIAL_DSL_FROM_BLOCK_RANGES: 'craft.extractDslFromBlockRanges'
} as const;

// Webview message types - from webview to provider
export const WebviewMessages = {
  // Common messages
  READY: 'ready',
  REFRESH: 'refresh',
  SET_VIEW_MODE: 'setViewMode',
  SHOW_INFORMATION: 'showInformation',
  
  // Domain view messages
  PREVIEW: 'preview',
  
  // Selection commands (triggered by toolbar)
  SELECTION_COMMAND: 'selectionCommand',
  REFRESH_COMMAND: 'refreshCommand',
  PREVIEW_COMMAND: 'previewCommand',
  TOGGLE_OPTIONS_COMMAND: 'toggleOptionsCommand'
} as const;

// Provider message types - from provider to webview
export const ProviderMessages = {
  INITIAL_DATA: 'initialData',
  DATA_REFRESH: 'dataRefresh',
  SELECTION_COMMAND: 'selectionCommand',
  REFRESH_COMMAND: 'refreshCommand',
  PREVIEW_COMMAND: 'previewCommand',
  TOGGLE_OPTIONS_COMMAND: 'toggleOptionsCommand'
} as const;

// Selection command actions
export const SelectionActions = {
  SELECT_ALL: 'selectAll',
  SELECT_NONE: 'selectNone',
  SELECT_CURRENT_FILE: 'selectCurrentFile'
} as const;

// Message payload types
export interface WebviewMessage {
  type: string;
  [key: string]: any;
}

export interface ShowInformationMessage extends WebviewMessage {
  type: typeof WebviewMessages.SHOW_INFORMATION;
  message: string;
}

export interface SelectionCommandMessage extends WebviewMessage {
  type: typeof WebviewMessages.SELECTION_COMMAND;
  action: typeof SelectionActions.SELECT_ALL | typeof SelectionActions.SELECT_NONE | typeof SelectionActions.SELECT_CURRENT_FILE;
}

export interface SetViewModeMessage extends WebviewMessage {
  type: typeof WebviewMessages.SET_VIEW_MODE;
  viewMode: 'current' | 'workspace';
}
