// client/src/utils/config.ts
import { workspace } from 'vscode';

export interface CraftConfig {
    serverUrl: string;
    timeout: number;
}

export function getCraftConfig(): CraftConfig {
    const config = workspace.getConfiguration('craft.server');
    return {
        serverUrl: config.get<string>('url', 'http://localhost:8080'),
        timeout: config.get<number>('timeout', 30000)
    };
}

export function validateServerUrl(url: string): boolean {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
    } catch {
        return false;
    }
}
// sourceRootsOption turns the craft.sources.roots setting into the language
// server's initializationOptions.sourceRoots ({"<repo>": "<dir>", "*": "<dir
// holding every repo>"}). With it the server makes each `//@` cite a document
// link to <dir>/<path>#L<start> (craft >= 2.25.0); without it, no links.
// Entries that are not a non-empty string are dropped; undefined when none is
// left, so the option is not sent at all.
export function sourceRootsOption(raw: unknown): Record<string, string> | undefined {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
        return undefined;
    }
    const out: Record<string, string> = {};
    for (const [repo, dir] of Object.entries(raw as Record<string, unknown>)) {
        if (typeof dir === 'string' && dir !== '') {
            out[repo] = dir;
        }
    }
    return Object.keys(out).length > 0 ? out : undefined;
}
