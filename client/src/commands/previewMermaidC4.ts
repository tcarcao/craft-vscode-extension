import { commands, window, WebviewPanel, ExtensionContext, ViewColumn, workspace } from 'vscode';
import { fetchMermaidC4, buildMermaidHtml, resolveMermaidJsUri } from './previewMermaidCommon';

let mermaidC4Panel: WebviewPanel | undefined;

export function registerPreviewMermaidC4(context: ExtensionContext) {
    const cmd = commands.registerCommand('craft.previewMermaidC4', async () => {
        const editor = window.activeTextEditor;
        if (!editor || editor.document.languageId !== 'craft') {
            window.showInformationMessage('Open a .craft file to preview.');
            return;
        }
        try {
            const source = await fetchMermaidC4(editor.document.getText());
            if (!mermaidC4Panel) {
                mermaidC4Panel = window.createWebviewPanel(
                    'craftMermaidC4',
                    'Craft Mermaid: C4',
                    ViewColumn.Beside,
                    {
                        enableScripts: true,
                        retainContextWhenHidden: true,
                        localResourceRoots: [context.extensionUri],
                    },
                );
                mermaidC4Panel.onDidDispose(() => { mermaidC4Panel = undefined; });
            }
            const theme = workspace.getConfiguration('craft').get<string>('mermaid.theme', 'default');
            mermaidC4Panel.webview.html = buildMermaidHtml(
                source,
                resolveMermaidJsUri(context, mermaidC4Panel).toString(),
                theme,
            );
            mermaidC4Panel.reveal(ViewColumn.Beside);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : String(err);
            window.showErrorMessage(`Mermaid C4 preview failed: ${msg}`);
        }
    });
    context.subscriptions.push(cmd);
}
