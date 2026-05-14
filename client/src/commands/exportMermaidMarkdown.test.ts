// Mock child_process to record the execFile call. Use the callback shape
// directly — promisify(execFile) is intentionally NOT used in the impl
// because jest.mock strips the [util.promisify.custom] symbol.
const mockExecFile = jest.fn();
jest.mock('child_process', () => ({
    execFile: (cmd: string, args: string[], cb: (err: Error | null, stdout: string, stderr: string) => void) => {
        mockExecFile(cmd, args);
        cb(null, '', '');
    },
}));

describe('runExportMermaidMarkdown', () => {
    beforeEach(() => {
        mockExecFile.mockReset();
    });

    it('shells out with --format mermaid-md and the chosen output dir', async () => {
        const { runExportMermaidMarkdown } = await import('./exportMermaidMarkdown');
        await runExportMermaidMarkdown('/bin/craft', '/tmp/test.craft', '/tmp/out');
        expect(mockExecFile).toHaveBeenCalledWith(
            '/bin/craft',
            ['generate', '/tmp/test.craft', '--format', 'mermaid-md', '--type', 'all', '-o', '/tmp/out'],
        );
    });
});
