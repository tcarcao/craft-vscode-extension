// Mock vscode env.clipboard.writeText and window for the command wrapper.
const mockWriteText = jest.fn();
jest.mock('vscode', () => ({
    env: { clipboard: { writeText: mockWriteText } },
    window: {
        activeTextEditor: { document: { languageId: 'craft', uri: { fsPath: '/tmp/test.craft' } } },
        showInformationMessage: jest.fn(),
        showErrorMessage: jest.fn(),
    },
    commands: { registerCommand: jest.fn() },
}));

// Mock child_process.execFile to return canned stdout. promisify(execFile)
// produces a function returning { stdout, stderr } — the mock must match.
jest.mock('child_process', () => ({
    execFile: jest.fn((_cmd: string, _args: string[], cb: (err: Error | null, stdout: string, stderr: string) => void) => {
        cb(null, 'flowchart LR\n  A --> B\n', '');
    }),
}));

describe('runCopyMermaidToClipboard', () => {
    beforeEach(() => {
        mockWriteText.mockReset();
    });

    it('shells out to craft with the right flags and writes stdout to clipboard', async () => {
        const { runCopyMermaidToClipboard } = await import('./copyMermaidToClipboard');
        const { execFile } = await import('child_process');
        await runCopyMermaidToClipboard('/path/to/craft-binary', '/tmp/test.craft');
        expect(execFile).toHaveBeenCalledWith(
            '/path/to/craft-binary',
            ['generate', '/tmp/test.craft', '--format', 'mermaid', '--type', 'domain', '--stdout'],
            expect.any(Function),
        );
        expect(mockWriteText).toHaveBeenCalledWith('flowchart LR\n  A --> B\n');
    });
});
