export interface BlockRange {
    startLine: number;
    endLine: number;
    fileUri: string;
}
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
    entryPointContext?: string;
    involvedContexts?: string[];
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
export declare const ServerCommands: {
    readonly CRAFT_EXTRACT_WORKSPACE: "CRAFT_EXTRACT_WORKSPACE";
    readonly EXTRACT_PARTIAL_DSL_FROM_BLOCK_RANGES: "craft.extractDslFromBlockRanges";
};
export declare const WebviewMessages: {
    readonly READY: "ready";
    readonly REFRESH: "refresh";
    readonly SET_VIEW_MODE: "setViewMode";
    readonly SHOW_INFORMATION: "showInformation";
    readonly PREVIEW: "preview";
    readonly SELECTION_COMMAND: "selectionCommand";
    readonly REFRESH_COMMAND: "refreshCommand";
    readonly PREVIEW_COMMAND: "previewCommand";
    readonly TOGGLE_OPTIONS_COMMAND: "toggleOptionsCommand";
};
export declare const ProviderMessages: {
    readonly INITIAL_DATA: "initialData";
    readonly DATA_REFRESH: "dataRefresh";
    readonly SELECTION_COMMAND: "selectionCommand";
    readonly REFRESH_COMMAND: "refreshCommand";
    readonly PREVIEW_COMMAND: "previewCommand";
    readonly TOGGLE_OPTIONS_COMMAND: "toggleOptionsCommand";
};
export declare const SelectionActions: {
    readonly SELECT_ALL: "selectAll";
    readonly SELECT_NONE: "selectNone";
    readonly SELECT_CURRENT_FILE: "selectCurrentFile";
};
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
