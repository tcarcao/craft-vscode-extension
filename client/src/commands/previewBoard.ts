// craft.previewBoard: draw one use case as a scenario board (craft >= 2.29.0)
// through the craft server's /preview/board/domain, which answers plain SVG.
import axios from 'axios';
import { commands, window, WebviewPanel, ExtensionContext, ViewColumn } from 'vscode';
import { getCraftConfig } from '../utils/config';
import { handlePreviewError, saveDownloadedFile } from './previewCommon';
import { useCaseNames, useCaseAt } from './craftText';

let boardPanel: WebviewPanel | undefined;
let boardSvg = '';
let boardName = '';

export function slugify(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function buildBoardHtml(svg: string): string {
    const src = `data:image/svg+xml;base64,${Buffer.from(svg, 'utf-8').toString('base64')}`;
    return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><style>
body { margin: 0; padding: 8px; }
.bar { margin-bottom: 8px; }
.wrap { overflow: auto; }
.wrap img { max-width: none; }
</style></head><body>
<div class="bar"><button id="dl">Download SVG</button></div>
<div class="wrap"><img src="${src}" alt="Scenario board"></div>
<script>
const vscode = acquireVsCodeApi();
document.getElementById('dl').addEventListener('click', () => vscode.postMessage({ command: 'downloadBoard' }));
</script></body></html>`;
}

export function registerPreviewBoard(context: ExtensionContext) {
    const cmd = commands.registerCommand('craft.previewBoard', async () => {
        try {
            const editor = window.activeTextEditor;
            if (!editor || editor.document.languageId !== 'craft') {
                window.showInformationMessage('No active Craft file.');
                return;
            }
            const text = editor.document.getText();
            const names = useCaseNames(text);
            if (names.length === 0) {
                window.showInformationMessage('No use case in this file.');
                return;
            }
            const useCase = useCaseAt(text, editor.selection.active.line)
                ?? (names.length === 1 ? names[0] : await window.showQuickPick(names, { title: 'Craft: Preview Scenario Board' }));
            if (!useCase) {
                return;
            }

            const { serverUrl, timeout } = getCraftConfig();
            const response = await axios.post(`${serverUrl}/preview/board/domain`, { dsl: text, useCase }, { timeout });
            boardSvg = response.data.data;
            boardName = useCase;

            if (!boardPanel) {
                boardPanel = window.createWebviewPanel('craftBoard', `Craft Board: ${useCase}`, ViewColumn.Beside, { enableScripts: true });
                boardPanel.onDidDispose(() => { boardPanel = undefined; });
                boardPanel.webview.onDidReceiveMessage(async message => {
                    if (message.command === 'downloadBoard') {
                        try {
                            await saveDownloadedFile(new TextEncoder().encode(boardSvg).buffer as ArrayBuffer, 'svg', 'board', `${slugify(boardName)}.board.svg`);
                        } catch (err: unknown) {
                            handlePreviewError(err);
                        }
                    }
                }, undefined, context.subscriptions);
            }
            boardPanel.title = `Craft Board: ${useCase}`;
            boardPanel.webview.html = buildBoardHtml(boardSvg);
            boardPanel.reveal(ViewColumn.Beside);
        } catch (err: unknown) {
            handlePreviewError(err);
        }
    });
    context.subscriptions.push(cmd);
}
