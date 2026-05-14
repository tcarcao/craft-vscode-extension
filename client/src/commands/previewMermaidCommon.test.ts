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
