import { commands, window, WebviewPanel, ExtensionContext, ViewColumn, workspace } from 'vscode';
import { fetchMermaidSequence, buildMermaidHtml, resolveMermaidJsUri } from './previewMermaidCommon';

let mermaidSequencePanel: WebviewPanel | undefined;

export function registerPreviewMermaidSequence(context: ExtensionContext) {
    const cmd = commands.registerCommand('craft.previewMermaidSequence', async () => {
        const editor = window.activeTextEditor;
        if (!editor || editor.document.languageId !== 'craft') {
            window.showInformationMessage('Open a .craft file to preview.');
            return;
        }
        try {
            const source = await fetchMermaidSequence(editor.document.getText());
            if (!mermaidSequencePanel) {
                mermaidSequencePanel = window.createWebviewPanel(
                    'craftMermaidSequence',
                    'Craft Mermaid: Sequence',
                    ViewColumn.Beside,
                    {
                        enableScripts: true,
                        retainContextWhenHidden: true,
                        localResourceRoots: [context.extensionUri],
                    },
                );
                mermaidSequencePanel.onDidDispose(() => { mermaidSequencePanel = undefined; });
            }
            const theme = workspace.getConfiguration('craft').get<string>('mermaid.theme', 'default');
            mermaidSequencePanel.webview.html = buildMermaidHtml(
                source,
                resolveMermaidJsUri(context, mermaidSequencePanel).toString(),
                theme,
            );
            mermaidSequencePanel.reveal(ViewColumn.Beside);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : String(err);
            window.showErrorMessage(`Mermaid sequence preview failed: ${msg}`);
        }
    });
    context.subscriptions.push(cmd);
}
