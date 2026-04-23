import type { ExtensionContext } from 'vscode';
import { PLATFORM_MAP, resolveBinary } from './binaryManager.js';
import type { BinaryManagerDeps } from './binaryManager.js';

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
