"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionActions = exports.ProviderMessages = exports.WebviewMessages = exports.ServerCommands = void 0;
exports.ServerCommands = {
    CRAFT_EXTRACT_WORKSPACE: 'CRAFT_EXTRACT_WORKSPACE',
    EXTRACT_PARTIAL_DSL_FROM_BLOCK_RANGES: 'craft.extractDslFromBlockRanges',
};
exports.WebviewMessages = {
    READY: 'ready',
    REFRESH: 'refresh',
    SET_VIEW_MODE: 'setViewMode',
    SHOW_INFORMATION: 'showInformation',
    PREVIEW: 'preview',
    SELECTION_COMMAND: 'selectionCommand',
    REFRESH_COMMAND: 'refreshCommand',
    PREVIEW_COMMAND: 'previewCommand',
    TOGGLE_OPTIONS_COMMAND: 'toggleOptionsCommand',
};
exports.ProviderMessages = {
    INITIAL_DATA: 'initialData',
    DATA_REFRESH: 'dataRefresh',
    SELECTION_COMMAND: 'selectionCommand',
    REFRESH_COMMAND: 'refreshCommand',
    PREVIEW_COMMAND: 'previewCommand',
    TOGGLE_OPTIONS_COMMAND: 'toggleOptionsCommand',
};
exports.SelectionActions = {
    SELECT_ALL: 'selectAll',
    SELECT_NONE: 'selectNone',
    SELECT_CURRENT_FILE: 'selectCurrentFile',
};
