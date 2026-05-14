import { commands, env, window, ExtensionContext } from 'vscode';
import { execFile } from 'child_process';
import { resolveBinary } from '../lsp/binaryManager';

// runCopyMermaidToClipboard is exported for testability. The registered
// command wraps it with editor lookup + error notifications. We wrap
// execFile in a manual Promise (rather than util.promisify) so the
// callback shape (err, stdout, stderr) is preserved verbatim and so
// tests can intercept it without relying on the [util.promisify.custom]
// override that child_process.execFile installs in real Node.
export async function runCopyMermaidToClipboard(binaryPath: string, filePath: string): Promise<void> {
    const stdout = await new Promise<string>((resolve, reject) => {
        execFile(
            binaryPath,
            ['generate', filePath, '--format', 'mermaid', '--type', 'domain', '--stdout'],
            (err, out, stderr) => {
                if (err) {
                    const msg = stderr && stderr.trim().length > 0 ? stderr : err.message;
                    reject(new Error(msg));
                    return;
                }
                resolve(out);
            },
        );
    });
    await env.clipboard.writeText(stdout);
}

export function registerCopyMermaidToClipboard(context: ExtensionContext) {
    const cmd = commands.registerCommand('craft.copyMermaidToClipboard', async () => {
        const editor = window.activeTextEditor;
        if (!editor || editor.document.languageId !== 'craft') {
            window.showInformationMessage('Open a .craft file first.');
            return;
        }
        try {
            const binaryPath = await resolveBinary(context);
            await runCopyMermaidToClipboard(binaryPath, editor.document.uri.fsPath);
            window.showInformationMessage('Mermaid copied to clipboard.');
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : String(err);
            window.showErrorMessage(`Copy Mermaid failed: ${msg}`);
        }
    });
    context.subscriptions.push(cmd);
}
