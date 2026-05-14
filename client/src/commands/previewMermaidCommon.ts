// eslint-disable-next-line @typescript-eslint/no-require-imports
const axios = require('axios');
import { WebviewPanel, Uri, ExtensionContext } from 'vscode';
import { getCraftConfig } from '../utils/config';
import {
    DomainPreviewRequest,
    C4PreviewRequest,
    PreviewResponse,
    DomainPreviewOptions,
    C4PreviewOptions,
} from '../types/api';

export type MermaidDiagramType = 'domain' | 'sequence' | 'c4';

// fetchMermaidDomain calls /preview/mermaid/domain and returns the Mermaid source.
export async function fetchMermaidDomain(dsl: string, opts?: DomainPreviewOptions): Promise<string> {
    return fetchMermaid('domain', { dsl, domainMode: opts?.domainMode, diagramType: opts?.diagramType } as DomainPreviewRequest);
}

export async function fetchMermaidSequence(dsl: string, opts?: DomainPreviewOptions): Promise<string> {
    return fetchMermaid('sequence', { dsl, domainMode: opts?.domainMode, diagramType: opts?.diagramType } as DomainPreviewRequest);
}

export async function fetchMermaidC4(dsl: string, opts?: C4PreviewOptions): Promise<string> {
    return fetchMermaid('c4', {
        dsl,
        boundariesMode: opts?.boundariesMode,
        showDatabases: opts?.showDatabases,
        focusInfo: opts && (opts.hasFocusedServices || opts.hasFocusedContexts) ? {
            focusedServiceNames: opts.focusedServiceNames,
            focusedContextNames: opts.focusedContextNames,
            hasFocusedServices: opts.hasFocusedServices,
            hasFocusedContexts: opts.hasFocusedContexts,
        } : undefined,
    } as C4PreviewRequest);
}

async function fetchMermaid(diagramType: MermaidDiagramType, body: DomainPreviewRequest | C4PreviewRequest): Promise<string> {
    const { serverUrl, timeout } = getCraftConfig();
    const { data } = await axios.post(`${serverUrl}/preview/mermaid/${diagramType}`, body, {
        headers: { 'Content-Type': 'application/json' },
        timeout,
    });
    const response: PreviewResponse = data;
    if (response.success && response.data) {
        return response.data;
    }
    throw new Error(response.error || `Failed to fetch Mermaid ${diagramType} source`);
}

// buildMermaidHtml renders a self-contained HTML page that loads mermaid.js
// from the given webview URI and renders the source. Theme is one of mermaid's
// supported values (default | dark | forest | neutral).
export function buildMermaidHtml(source: string, mermaidJsUri: string, theme: string): string {
    // Avoid breaking the host page if source contains literal "</script>".
    const safeSource = source.replace(/<\/script>/gi, '<\\/script>');
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  body { background: var(--vscode-editor-background); color: var(--vscode-editor-foreground); margin: 0; padding: 16px; font-family: var(--vscode-font-family); }
  .mermaid { display: block; margin: 0 auto; }
  pre.source { white-space: pre-wrap; background: var(--vscode-textBlockQuote-background); padding: 8px; border-radius: 4px; }
  details { margin-top: 16px; }
</style>
</head>
<body>
<pre class="mermaid">${safeSource}</pre>
<details>
  <summary>Mermaid source</summary>
  <pre class="source">${safeSource}</pre>
</details>
<script src="${mermaidJsUri}"></script>
<script>
  if (window.mermaid && typeof window.mermaid.initialize === 'function') {
    window.mermaid.initialize({ startOnLoad: true, theme: '${theme}', securityLevel: 'loose' });
  }
</script>
</body>
</html>`;
}

// resolveMermaidJsUri returns a webview URI pointing at the bundled mermaid UMD
// build (node_modules/mermaid/dist/mermaid.min.js).
export function resolveMermaidJsUri(context: ExtensionContext, panel: WebviewPanel): Uri {
    const onDisk = Uri.joinPath(context.extensionUri, 'node_modules', 'mermaid', 'dist', 'mermaid.min.js');
    return panel.webview.asWebviewUri(onDisk);
}

// Re-exports for downstream command modules to import from this single file.
export type { DomainPreviewOptions, C4PreviewOptions };
