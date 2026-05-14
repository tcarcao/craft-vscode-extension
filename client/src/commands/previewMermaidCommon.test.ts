// Mock axios so we can assert which URL fetchMermaid* hits and what it does with the response.
// Use the "mock"-prefixed name so jest.mock's hoisting can reference it safely.
jest.mock('axios', () => {
    const post = jest.fn();
    return {
        __esModule: true,
        default: { post },
        post,
    };
});

// Mock the config helper so getCraftConfig() returns a predictable URL.
jest.mock('../utils/config', () => ({
    getCraftConfig: () => ({ serverUrl: 'http://localhost:9999', timeout: 5000 }),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const mockPost = require('axios').post as jest.Mock;

import { buildMermaidHtml } from './previewMermaidCommon';

describe('buildMermaidHtml', () => {
    it('embeds the source inside a <pre class="mermaid"> block', () => {
        const html = buildMermaidHtml('flowchart LR\n  A --> B\n', '/webview/mermaid.js', 'default');
        expect(html).toContain('class="mermaid"');
        expect(html).toContain('flowchart LR');
        expect(html).toContain('A --> B');
    });

    it('references the bundled mermaid.js via the passed URI', () => {
        const html = buildMermaidHtml('graph LR', 'vscode-resource://abc/mermaid.js', 'default');
        expect(html).toContain('vscode-resource://abc/mermaid.js');
    });

    it('passes the theme to mermaid.initialize', () => {
        const html = buildMermaidHtml('graph LR', '/m.js', 'dark');
        expect(html).toContain("theme: 'dark'");
    });

    it('escapes </script> in source to prevent injection', () => {
        const html = buildMermaidHtml('graph LR <</script>->', '/m.js', 'default');
        expect(html.indexOf('</script>->')).toBe(-1);
    });
});

describe('fetchMermaidDomain / Sequence / C4', () => {
    beforeEach(() => {
        mockPost.mockReset();
    });

    it('domain endpoint returns source on success', async () => {
        mockPost.mockResolvedValueOnce({ data: { success: true, data: 'flowchart LR\n  A --> B' } });
        const { fetchMermaidDomain } = await import('./previewMermaidCommon');
        const src = await fetchMermaidDomain('dsl-here');
        expect(src).toBe('flowchart LR\n  A --> B');
        expect(mockPost).toHaveBeenCalledWith(
            'http://localhost:9999/preview/mermaid/domain',
            expect.objectContaining({ dsl: 'dsl-here' }),
            expect.any(Object),
        );
    });

    it('sequence endpoint hits the right URL', async () => {
        mockPost.mockResolvedValueOnce({ data: { success: true, data: 'sequenceDiagram' } });
        const { fetchMermaidSequence } = await import('./previewMermaidCommon');
        await fetchMermaidSequence('dsl');
        expect(mockPost).toHaveBeenCalledWith(
            'http://localhost:9999/preview/mermaid/sequence',
            expect.any(Object),
            expect.any(Object),
        );
    });

    it('c4 endpoint hits the right URL', async () => {
        mockPost.mockResolvedValueOnce({ data: { success: true, data: 'C4Container' } });
        const { fetchMermaidC4 } = await import('./previewMermaidCommon');
        await fetchMermaidC4('dsl');
        expect(mockPost).toHaveBeenCalledWith(
            'http://localhost:9999/preview/mermaid/c4',
            expect.any(Object),
            expect.any(Object),
        );
    });

    it('throws when server reports success=false', async () => {
        mockPost.mockResolvedValueOnce({ data: { success: false, error: 'Parse error: bad token' } });
        const { fetchMermaidDomain } = await import('./previewMermaidCommon');
        await expect(fetchMermaidDomain('bad')).rejects.toThrow('Parse error: bad token');
    });
});
