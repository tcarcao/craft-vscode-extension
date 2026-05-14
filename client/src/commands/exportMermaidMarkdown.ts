import { commands, window, ExtensionContext } from 'vscode';
import { execFile } from 'child_process';
import { resolveBinary } from '../lsp/binaryManager';

// runExportMermaidMarkdown is exported for testability. It wraps execFile in
// a manual Promise because promisify(execFile) doesn't work with jest's
// child_process mock (the mock strips Node's [util.promisify.custom] symbol).
export async function runExportMermaidMarkdown(binaryPath: string, filePath: string, outDir: string): Promise<void> {
    await new Promise<void>((resolve, reject) => {
        execFile(
            binaryPath,
            ['generate', filePath, '--format', 'mermaid-md', '--type', 'all', '-o', outDir],
            (err, _stdout, stderr) => {
                if (err) {
                    const msg = stderr ? `${err.message}\n${stderr}` : err.message;
                    reject(new Error(msg));
                    return;
                }
                resolve();
            },
        );
    });
}

export function registerExportMermaidMarkdown(context: ExtensionContext) {
    const cmd = commands.registerCommand('craft.exportMermaidMarkdown', async () => {
        const editor = window.activeTextEditor;
        if (!editor || editor.document.languageId !== 'craft') {
            window.showInformationMessage('Open a .craft file first.');
            return;
        }
        const folder = await window.showOpenDialog({
            canSelectFiles: false,
            canSelectFolders: true,
            canSelectMany: false,
            openLabel: 'Select output directory',
        });
        if (!folder || folder.length === 0) {
            return;
        }
        try {
            const binaryPath = await resolveBinary(context);
            await runExportMermaidMarkdown(binaryPath, editor.document.uri.fsPath, folder[0].fsPath);
            window.showInformationMessage(`Mermaid .md files written to ${folder[0].fsPath}`);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : String(err);
            // Craft's no-clobber error ("refusing to overwrite ...") surfaces here
            // verbatim — the user can delete the file or re-invoke craft with --force
            // from the CLI. Future versions can offer a Retry-with-Force action.
            window.showErrorMessage(`Export failed: ${msg}`);
        }
    });
    context.subscriptions.push(cmd);
}
