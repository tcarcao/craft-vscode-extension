// craft.previewJourney: draw a journey's spine (craft >= 2.25.0). Every use
// case tagged `journey: <slug>` is drawn in spine order, across files, by the
// craft server's /preview/mermaid/journey. The language server has no preview
// command (its journey features are hover, definition and a code lens), so
// this goes through the craft server like the other previews.
import { commands, window, WebviewPanel, ExtensionContext, ViewColumn, workspace, Uri } from 'vscode';
import { fetchJourneySlugs, fetchMermaidJourney, buildMermaidHtml, resolveMermaidJsUri } from './previewMermaidCommon';
import { handlePreviewError } from './previewCommon';

let journeyPanel: WebviewPanel | undefined;

// mask blanks out string contents and `//` comments (keeping every offset and
// newline) so braces and keys can be found in code only.
function mask(text: string): string {
    let out = '';
    let inString = false;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (inString) {
            if (c === '\\' && i + 1 < text.length && text[i + 1] !== '\n') {
                out += '  ';
                i++;
            } else if (c === '"' || c === '\n') {
                inString = false;
                out += c;
            } else {
                out += ' ';
            }
        } else if (c === '"') {
            inString = true;
            out += c;
        } else if (c === '/' && text[i + 1] === '/' && (i === 0 || /\s/.test(text[i - 1]))) {
            while (i < text.length && text[i] !== '\n') {
                out += ' ';
                i++;
            }
            if (i < text.length) {
                out += '\n';
            }
        } else {
            out += c;
        }
    }
    return out;
}

// closingBrace returns the offset of the `}` that closes the `{` at open, or
// the end of the text when it is not closed.
function closingBrace(masked: string, open: number): number {
    let depth = 0;
    for (let i = open; i < masked.length; i++) {
        if (masked[i] === '{') {
            depth++;
        } else if (masked[i] === '}') {
            depth--;
            if (depth === 0) {
                return i;
            }
        }
    }
    return masked.length;
}

// pickDefaultSlug returns the `journey:` tag value of the use case that holds
// line (0-based), or undefined when the line is outside a use case or the use
// case has no journey tag. A list value gives its first item.
export function pickDefaultSlug(text: string, line: number): string | undefined {
    const masked = mask(text);
    const lineStarts = [0];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '\n') {
            lineStarts.push(i + 1);
        }
    }
    const lineOf = (offset: number): number => {
        let n = 0;
        while (n + 1 < lineStarts.length && lineStarts[n + 1] <= offset) {
            n++;
        }
        return n;
    };

    const useCase = /(^|\n)[ \t]*use_case\b[^{\n]*\{/g;
    for (let m = useCase.exec(masked); m; m = useCase.exec(masked)) {
        const open = m.index + m[0].length - 1;
        const close = closingBrace(masked, open);
        const start = m.index + m[1].length;
        if (line < lineOf(start) || line > lineOf(close)) {
            continue;
        }
        const body = masked.slice(open + 1, close);
        const tags = /\btags\s*\{/.exec(body);
        if (!tags) {
            return undefined;
        }
        const tagsOpen = open + 1 + tags.index + tags[0].length - 1;
        const tagsClose = closingBrace(masked, tagsOpen);
        const key = /(?:^|[\s{,])journey\s*:\s*/.exec(masked.slice(tagsOpen + 1, tagsClose));
        if (!key) {
            return undefined;
        }
        const value = text.slice(tagsOpen + 1 + key.index + key[0].length, tagsClose);
        const v = /^(?:"([^"]*)"|([A-Za-z0-9_][A-Za-z0-9_./-]*))/.exec(value);
        return v ? (v[1] ?? v[2]) : undefined;
    }
    return undefined;
}

// orderSlugs puts the default slug first when the server knows it.
export function orderSlugs(slugs: string[], preferred: string | undefined): string[] {
    if (!preferred || !slugs.includes(preferred)) {
        return slugs;
    }
    return [preferred, ...slugs.filter(s => s !== preferred)];
}

// collectCraftFiles reads every .craft file of the workspace (the unsaved text
// of open editors wins), keyed by workspace-relative path, plus the active
// document when it lies outside the workspace.
async function collectCraftFiles(active?: { uri: Uri; getText(): string }): Promise<Record<string, string>> {
    const files: Record<string, string> = {};
    const open = new Map(workspace.textDocuments.map(d => [d.uri.toString(), d]));
    const uris = await workspace.findFiles('**/*.craft', '**/node_modules/**');
    for (const uri of uris) {
        const doc = open.get(uri.toString());
        const text = doc ? doc.getText() : new TextDecoder('utf-8').decode(await workspace.fs.readFile(uri));
        files[workspace.asRelativePath(uri, true)] = text;
    }
    if (active && !uris.some(u => u.toString() === active.uri.toString())) {
        files[workspace.asRelativePath(active.uri, true)] = active.getText();
    }
    return files;
}

export function registerPreviewJourney(context: ExtensionContext) {
    const cmd = commands.registerCommand('craft.previewJourney', async () => {
        try {
            const editor = window.activeTextEditor;
            const active = editor && editor.document.languageId === 'craft' ? editor.document : undefined;
            const preferred = active ? pickDefaultSlug(active.getText(), editor!.selection.active.line) : undefined;

            const files = await collectCraftFiles(active);
            if (Object.keys(files).length === 0) {
                window.showInformationMessage('No .craft files in this workspace.');
                return;
            }
            const slugs = await fetchJourneySlugs(files);
            if (slugs.length === 0) {
                window.showInformationMessage('No use case has a journey tag. Add `tags { journey: <slug> }` to the use cases of a journey.');
                return;
            }
            const slug = await window.showQuickPick(orderSlugs(slugs, preferred), {
                title: 'Craft: Preview Journey',
                placeHolder: 'The journey whose spine to draw',
            });
            if (!slug) {
                return;
            }

            const source = await fetchMermaidJourney(files, slug);
            if (!journeyPanel) {
                journeyPanel = window.createWebviewPanel(
                    'craftJourney',
                    `Craft Journey: ${slug}`,
                    ViewColumn.Beside,
                    {
                        enableScripts: true,
                        retainContextWhenHidden: true,
                        localResourceRoots: [context.extensionUri],
                    },
                );
                journeyPanel.onDidDispose(() => { journeyPanel = undefined; });
            }
            journeyPanel.title = `Craft Journey: ${slug}`;
            const theme = workspace.getConfiguration('craft').get<string>('mermaid.theme', 'default');
            journeyPanel.webview.html = buildMermaidHtml(
                source,
                resolveMermaidJsUri(context, journeyPanel).toString(),
                theme,
            );
            journeyPanel.reveal(ViewColumn.Beside);
        } catch (err: unknown) {
            handlePreviewError(err);
        }
    });
    context.subscriptions.push(cmd);
}
