import { describe, it, expect, jest } from '@jest/globals';
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.withProgress as any).mockImplementation((_opts: unknown, task: (p: { report: () => void }) => Promise<unknown>) =>
      task({ report: () => undefined })
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.showErrorMessage as any).mockResolvedValue(undefined);

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
    jest.spyOn(fsPromises, 'readFile').mockResolvedValue(content as any);

    const result = await _sha256File('/any/path');

    const { createHash } = await import('node:crypto');
    const expected = createHash('sha256').update(content).digest('hex');

    expect(result).toBe(expected);
  });
});
