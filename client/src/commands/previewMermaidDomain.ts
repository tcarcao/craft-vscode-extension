import { commands, window, WebviewPanel, ExtensionContext, ViewColumn, workspace } from 'vscode';
import { fetchMermaidDomain, buildMermaidHtml, resolveMermaidJsUri } from './previewMermaidCommon';

let mermaidDomainPanel: WebviewPanel | undefined;

export function registerPreviewMermaidDomain(context: ExtensionContext) {
    const cmd = commands.registerCommand('craft.previewMermaidDomain', async () => {
        const editor = window.activeTextEditor;
        if (!editor || editor.document.languageId !== 'craft') {
            window.showInformationMessage('Open a .craft file to preview.');
            return;
        }
        try {
            const source = await fetchMermaidDomain(editor.document.getText());
            if (!mermaidDomainPanel) {
                mermaidDomainPanel = window.createWebviewPanel(
                    'craftMermaidDomain',
                    'Craft Mermaid: Domain',
                    ViewColumn.Beside,
                    {
                        enableScripts: true,
                        retainContextWhenHidden: true,
                        localResourceRoots: [context.extensionUri],
                    },
                );
                mermaidDomainPanel.onDidDispose(() => { mermaidDomainPanel = undefined; });
            }
            const theme = workspace.getConfiguration('craft').get<string>('mermaid.theme', 'default');
            mermaidDomainPanel.webview.html = buildMermaidHtml(
                source,
                resolveMermaidJsUri(context, mermaidDomainPanel).toString(),
                theme,
            );
            mermaidDomainPanel.reveal(ViewColumn.Beside);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : String(err);
            window.showErrorMessage(`Mermaid domain preview failed: ${msg}`);
        }
    });
    context.subscriptions.push(cmd);
}
