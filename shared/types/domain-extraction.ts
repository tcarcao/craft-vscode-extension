export interface BlockRange {
  startLine: number;
  endLine: number;
  fileUri: string;
}

// CraftExtractionResult is the response shape for CRAFT_EXTRACT_WORKSPACE.
export interface CraftExtractionResult {
  services: CraftServiceEntry[];
  domains: CraftDomainEntry[];
  useCases: CraftUseCaseEntry[];
  actors: CraftActorEntry[];
  actorBlocks: BlockRange[];
  archs: CraftArchEntry[];
}

export interface CraftServiceEntry {
  name: string;
  uri: string;
  startLine: number;
  endLine: number;
  contexts: string[];
  inCurrentFile: boolean;
}

export interface CraftDomainEntry {
  name: string;
  uri: string;
  startLine: number;
  endLine: number;
  boundedContexts: CraftBCEntry[];
  inCurrentFile: boolean;
}

export interface CraftBCEntry {
  name: string;
  startLine: number;
}

export interface CraftUseCaseEntry {
  name: string;
  uri: string;
  startLine: number;
  endLine: number;
  inCurrentFile: boolean;
}

export interface CraftActorEntry {
  name: string;
  type: string;
  uri: string;
  startLine: number;
  endLine: number;
  inCurrentFile: boolean;
}

export interface CraftArchEntry {
  name: string;
  uri: string;
  startLine: number;
  endLine: number;
  inCurrentFile: boolean;
}

export const ServerCommands = {
  CRAFT_EXTRACT_WORKSPACE: 'CRAFT_EXTRACT_WORKSPACE',
  EXTRACT_PARTIAL_DSL_FROM_BLOCK_RANGES: 'craft.extractDslFromBlockRanges',
} as const;

export const WebviewMessages = {
  READY: 'ready',
  REFRESH: 'refresh',
  SET_VIEW_MODE: 'setViewMode',
  SHOW_INFORMATION: 'showInformation',
  PREVIEW: 'preview',
  SELECTION_COMMAND: 'selectionCommand',
  REFRESH_COMMAND: 'refreshCommand',
  PREVIEW_COMMAND: 'previewCommand',
  TOGGLE_OPTIONS_COMMAND: 'toggleOptionsCommand',
} as const;

export const ProviderMessages = {
  INITIAL_DATA: 'initialData',
  DATA_REFRESH: 'dataRefresh',
  SELECTION_COMMAND: 'selectionCommand',
  REFRESH_COMMAND: 'refreshCommand',
  PREVIEW_COMMAND: 'previewCommand',
  TOGGLE_OPTIONS_COMMAND: 'toggleOptionsCommand',
} as const;

export const SelectionActions = {
  SELECT_ALL: 'selectAll',
  SELECT_NONE: 'selectNone',
  SELECT_CURRENT_FILE: 'selectCurrentFile',
} as const;

export interface WebviewMessage {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ShowInformationMessage extends WebviewMessage {
  type: typeof WebviewMessages.SHOW_INFORMATION;
  message: string;
}

export interface SelectionCommandMessage extends WebviewMessage {
  type: typeof WebviewMessages.SELECTION_COMMAND;
  action:
    | typeof SelectionActions.SELECT_ALL
    | typeof SelectionActions.SELECT_NONE
    | typeof SelectionActions.SELECT_CURRENT_FILE;
}

export interface SetViewModeMessage extends WebviewMessage {
  type: typeof WebviewMessages.SET_VIEW_MODE;
  viewMode: 'current' | 'workspace';
}
