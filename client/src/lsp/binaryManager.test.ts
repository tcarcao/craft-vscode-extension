import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import type { ExtensionContext } from 'vscode';
import { PLATFORM_MAP, resolveBinary } from './binaryManager.js';
import type { BinaryManagerDeps } from './binaryManager.js';
import { _sha256File } from './binaryManager.js';
import * as fsPromises from 'node:fs/promises';

const mockContext = {
  extension: { packageJSON: { version: '0.1.0' } },
  globalStorageUri: { fsPath: '/fake/storage' },
} as unknown as ExtensionContext;

describe('PLATFORM_MAP', () => {
  it('contains entries for all 5 supported targets', () => {
    expect(Object.keys(PLATFORM_MAP)).toHaveLength(5);
  });

  it.each([
    ['darwin-arm64', { os: 'darwin',  arch: 'arm64', ext: 'tar.gz' }],
    ['darwin-x64',   { os: 'darwin',  arch: 'amd64', ext: 'tar.gz' }],
    ['linux-arm64',  { os: 'linux',   arch: 'arm64', ext: 'tar.gz' }],
    ['linux-x64',    { os: 'linux',   arch: 'amd64', ext: 'tar.gz' }],
    ['win32-x64',    { os: 'windows', arch: 'amd64', ext: 'zip'    }],
  ])('maps %s correctly', (key, expected) => {
    expect(PLATFORM_MAP[key]).toEqual(expected);
  });
});

describe('resolveBinary — unsupported platform', () => {
  it('throws when platform is not in PLATFORM_MAP', async () => {
    const deps: BinaryManagerDeps = {
      existsSync: () => false,
      platform: () => 'freebsd',
      arch: () => 'x64',
    };
    await expect(resolveBinary(mockContext, deps)).rejects.toThrow(
      'Unsupported platform: freebsd-x64'
    );
  });
});

describe('resolveBinary — executablePath setting override', () => {
  it('returns the configured path when it exists', async () => {
    const { workspace } = await import('vscode');
    (workspace.getConfiguration as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('/custom/craft'),
    });

    const deps: BinaryManagerDeps = {
      existsSync: (p) => p === '/custom/craft',
      platform: () => 'linux',
      arch: () => 'x64',
    };

    const result = await resolveBinary(mockContext, deps);
    expect(result).toBe('/custom/craft');
  });

  it('falls through when executablePath is set but file does not exist', async () => {
    const { workspace, window } = await import('vscode');
    (workspace.getConfiguration as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('/nonexistent/craft'),
    });
    // Make withProgress execute the task callback so downloadString is actually called
    (window.withProgress as jest.Mock).mockImplementation((_opts: unknown, task: (p: { report: () => void }) => Promise<unknown>) =>
      task({ report: () => undefined })
    );
    (window.showErrorMessage as jest.Mock<() => Promise<unknown>>).mockResolvedValue(undefined);

    const deps: BinaryManagerDeps = {
      existsSync: () => false,
      platform: () => 'linux',
      arch: () => 'x64',
      downloadString: (jest.fn() as unknown as jest.Mock<() => Promise<string>>).mockRejectedValue(new Error('download skipped in test')) as unknown as (url: string) => Promise<string>,
      mkdtemp: jest.fn() as unknown as (prefix: string) => Promise<string>,
      rm: (jest.fn() as unknown as jest.Mock<() => Promise<void>>).mockResolvedValue(undefined) as unknown as (p: string, opts?: { recursive?: boolean; force?: boolean }) => Promise<void>,
    };

    await expect(resolveBinary(mockContext, deps)).rejects.toThrow();
  });
});

describe('resolveBinary — cache hit', () => {
  it('returns cached path when binary already exists at expected location', async () => {
    const { workspace } = await import('vscode');
    (workspace.getConfiguration as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(''),
    });

    const expectedPath = '/fake/storage/craft-lsp/v0.1.0/linux-x64/craft';
    const deps: BinaryManagerDeps = {
      existsSync: (p) => p === expectedPath,
      platform: () => 'linux',
      arch: () => 'x64',
    };

    const result = await resolveBinary(mockContext, deps);
    expect(result).toBe(expectedPath);
  });
});

describe('_sha256File', () => {
  it('computes the correct SHA256 hex digest', async () => {
    const content = Buffer.from('hello craft');
    (jest.spyOn(fsPromises, 'readFile') as unknown as jest.Mock<() => Promise<unknown>>).mockResolvedValue(content);

    const result = await _sha256File('/any/path');

    const { createHash } = await import('node:crypto');
    const expected = createHash('sha256').update(content).digest('hex');

    expect(result).toBe(expected);
    expect(fsPromises.readFile).toHaveBeenCalledWith('/any/path');
  });
});

describe('resolveBinary — full download happy path', () => {
  beforeEach(async () => {
    const { workspace, window } = await import('vscode');
    (workspace.getConfiguration as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(''),
    });
    (window.withProgress as jest.Mock).mockImplementation(
      (_opts: unknown, task: (progress: { report: jest.Mock }) => Promise<void>) =>
        task({ report: jest.fn() })
    );
  });

  it('downloads, verifies, extracts, and returns binary path on linux-x64', async () => {
    const archiveName = 'craft_0.1.0_linux_amd64.tar.gz';
    const checksumLine = `abc123def456  ${archiveName}`;

    const mockDownloadString = jest.fn(async (_url: string) => checksumLine + '\n');
    const mockDownloadFile = jest.fn(async (_url: string, _dest: string, _onProgress: (r: number, t: number) => void) => {});
    const mockSha256File = jest.fn(async (_p: string) => 'abc123def456');
    const mockExecFile = jest.fn(async (_cmd: string, _args: string[]) => ({ stdout: '', stderr: '' }));
    const mockMkdtemp = jest.fn(async (_prefix: string) => '/tmp/craft-lsp-xyz');
    const mockMkdir = jest.fn(async (_p: string, _opts?: { recursive?: boolean }) => undefined as string | undefined);
    const mockChmod = jest.fn(async (_p: string, _mode: number): Promise<void> => {});
    const mockReaddir = jest.fn(async (_p: string) => ['v0.1.0'] as string[]);
    const mockRm = jest.fn(async (_p: string, _opts?: { recursive?: boolean; force?: boolean }): Promise<void> => {});

    const deps: BinaryManagerDeps = {
      existsSync: () => false,
      platform: () => 'linux',
      arch: () => 'x64',
      tmpdir: () => '/tmp',
      downloadString: mockDownloadString,
      downloadFile: mockDownloadFile,
      sha256File: mockSha256File,
      execFile: mockExecFile,
      mkdtemp: mockMkdtemp,
      mkdir: mockMkdir,
      chmod: mockChmod,
      readdir: mockReaddir,
      rm: mockRm,
    };

    const result = await resolveBinary(mockContext, deps);

    expect(result).toBe('/fake/storage/craft-lsp/v0.1.0/linux-x64/craft');

    expect(mockDownloadString).toHaveBeenCalledWith(
      'https://github.com/tcarcao/craft/releases/download/v0.1.0/checksums.txt'
    );
    expect(mockDownloadFile).toHaveBeenCalledWith(
      'https://github.com/tcarcao/craft/releases/download/v0.1.0/craft_0.1.0_linux_amd64.tar.gz',
      '/tmp/craft-lsp-xyz/craft_0.1.0_linux_amd64.tar.gz',
      expect.any(Function)
    );
    expect(mockExecFile).toHaveBeenCalledWith('tar', [
      'xzf',
      '/tmp/craft-lsp-xyz/craft_0.1.0_linux_amd64.tar.gz',
      '-C',
      '/fake/storage/craft-lsp/v0.1.0/linux-x64',
      'craft',
    ]);
    expect(mockChmod).toHaveBeenCalledWith(
      '/fake/storage/craft-lsp/v0.1.0/linux-x64/craft',
      0o755
    );
    expect(mockRm).toHaveBeenCalledWith('/tmp/craft-lsp-xyz', { recursive: true, force: true });
  });

  it('runs xattr quarantine removal on darwin', async () => {
    const archiveName = 'craft_0.1.0_darwin_arm64.tar.gz';
    const checksumLine = `deadbeef  ${archiveName}`;

    const mockExecFile = jest.fn(async (_cmd: string, _args: string[]) => ({ stdout: '', stderr: '' }));

    const deps: BinaryManagerDeps = {
      existsSync: () => false,
      platform: () => 'darwin',
      arch: () => 'arm64',
      tmpdir: () => '/tmp',
      downloadString: jest.fn(async (_url: string) => checksumLine + '\n'),
      downloadFile: jest.fn(async (_url: string, _dest: string, _onProgress: (r: number, t: number) => void) => {}),
      sha256File: jest.fn(async (_p: string) => 'deadbeef'),
      execFile: mockExecFile,
      mkdtemp: jest.fn(async (_prefix: string) => '/tmp/craft-lsp-abc'),
      mkdir: jest.fn(async (_p: string, _opts?: { recursive?: boolean }) => undefined as string | undefined),
      chmod: jest.fn(async (_p: string, _mode: number): Promise<void> => {}),
      readdir: jest.fn(async (_p: string) => ['v0.1.0'] as string[]),
      rm: jest.fn(async (_p: string, _opts?: { recursive?: boolean; force?: boolean }): Promise<void> => {}),
    };

    await resolveBinary(mockContext, deps);

    expect(mockExecFile).toHaveBeenCalledWith('xattr', [
      '-dr',
      'com.apple.quarantine',
      '/fake/storage/craft-lsp/v0.1.0/darwin-arm64/craft',
    ]);
    expect(deps.rm).toHaveBeenCalledWith('/tmp/craft-lsp-abc', { recursive: true, force: true });
  });
});

describe('resolveBinary — checksum mismatch', () => {
  it('throws when SHA256 does not match checksums.txt', async () => {
    // beforeEach already clears mocks; set up workspace + withProgress mocks here
    const { workspace, window } = await import('vscode');
    (workspace.getConfiguration as jest.Mock).mockReturnValue({ get: jest.fn().mockReturnValue('') });
    (window.withProgress as jest.Mock).mockImplementation(
      (_opts: unknown, task: (progress: { report: jest.Mock }) => Promise<void>) =>
        task({ report: jest.fn() })
    );

    const archiveName = 'craft_0.1.0_linux_amd64.tar.gz';
    const checksumLine = `expected_hash  ${archiveName}`;

    const deps: BinaryManagerDeps = {
      existsSync: () => false,
      platform: () => 'linux',
      arch: () => 'x64',
      tmpdir: () => '/tmp',
      downloadString: jest.fn(async (_url: string) => checksumLine + '\n'),
      downloadFile: jest.fn(async (_url: string, _dest: string, _onProgress: (r: number, t: number) => void) => {}),
      sha256File: jest.fn(async (_p: string) => 'actual_different_hash'),  // mismatch!
      execFile: jest.fn(async (_cmd: string, _args: string[]) => ({ stdout: '', stderr: '' })),
      mkdtemp: jest.fn(async (_prefix: string) => '/tmp/craft-lsp-chk'),
      mkdir: jest.fn(async (_p: string, _opts?: { recursive?: boolean }) => undefined as string | undefined),
      chmod: jest.fn(async (_p: string, _mode: number): Promise<void> => {}),
      readdir: jest.fn(async (_p: string) => [] as string[]),
      rm: jest.fn(async (_p: string, _opts?: { recursive?: boolean; force?: boolean }): Promise<void> => {}),
    };

    await expect(resolveBinary(mockContext, deps)).rejects.toThrow(/checksum/i);
  });
});

describe('resolveBinary — old version cleanup', () => {
  it('removes stale version directories after successful download', async () => {
    const { workspace, window } = await import('vscode');
    (workspace.getConfiguration as jest.Mock).mockReturnValue({ get: jest.fn().mockReturnValue('') });
    (window.withProgress as jest.Mock).mockImplementation(
      (_opts: unknown, task: (progress: { report: jest.Mock }) => Promise<void>) =>
        task({ report: jest.fn() })
    );

    const archiveName = 'craft_0.1.0_linux_amd64.tar.gz';
    const checksumLine = `goodhash  ${archiveName}`;
    const mockRm = jest.fn(async (_p: string, _opts?: { recursive?: boolean; force?: boolean }): Promise<void> => {});

    const deps: BinaryManagerDeps = {
      existsSync: () => false,
      platform: () => 'linux',
      arch: () => 'x64',
      tmpdir: () => '/tmp',
      downloadString: jest.fn(async (_url: string) => checksumLine + '\n'),
      downloadFile: jest.fn(async (_url: string, _dest: string, _onProgress: (r: number, t: number) => void) => {}),
      sha256File: jest.fn(async (_p: string) => 'goodhash'),
      execFile: jest.fn(async (_cmd: string, _args: string[]) => ({ stdout: '', stderr: '' })),
      mkdtemp: jest.fn(async (_prefix: string) => '/tmp/craft-lsp-old'),
      mkdir: jest.fn(async (_p: string, _opts?: { recursive?: boolean }) => undefined as string | undefined),
      chmod: jest.fn(async (_p: string, _mode: number): Promise<void> => {}),
      readdir: jest.fn(async (_p: string) => ['v0.0.9', 'v0.1.0'] as string[]),  // old + current
      rm: mockRm,
    };

    await resolveBinary(mockContext, deps);

    // rm called for old version dir (v0.0.9), NOT for current (v0.1.0)
    expect(mockRm).toHaveBeenCalledWith(
      '/fake/storage/craft-lsp/v0.0.9',
      { recursive: true, force: true }
    );
    // rm called exactly twice: once for old version, once for temp dir
    expect(mockRm).toHaveBeenCalledTimes(2);
  });
});

describe('resolveBinary — download failure UX', () => {
  it('shows error message on download failure', async () => {
    const { workspace, window } = await import('vscode');
    (workspace.getConfiguration as jest.Mock).mockReturnValue({ get: jest.fn().mockReturnValue('') });
    (window.withProgress as jest.Mock).mockImplementation(
      (_opts: unknown, task: (progress: { report: jest.Mock }) => Promise<void>) =>
        task({ report: jest.fn() })
    );
    (window.showErrorMessage as jest.Mock<() => Promise<unknown>>).mockResolvedValue(undefined);

    const deps: BinaryManagerDeps = {
      existsSync: () => false,
      platform: () => 'linux',
      arch: () => 'x64',
      tmpdir: () => '/tmp',
      downloadString: jest.fn(async (_url: string): Promise<string> => { throw new Error('network error'); }),
      mkdtemp: jest.fn(async (_prefix: string) => '/tmp/craft-lsp-fail'),
      rm: jest.fn(async (_p: string, _opts?: { recursive?: boolean; force?: boolean }): Promise<void> => {}),
    };

    await expect(resolveBinary(mockContext, deps)).rejects.toThrow();
    expect(window.showErrorMessage).toHaveBeenCalledWith(
      expect.stringContaining('network error'),
      'Retry',
      'Set Binary Path'
    );
  });
});
