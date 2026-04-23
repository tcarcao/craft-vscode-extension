import * as https from 'node:https';
import * as fs from 'node:fs/promises';
import * as fsSync from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import * as crypto from 'node:crypto';
import { execFile as execFileCb } from 'node:child_process';
import { promisify } from 'node:util';
import { ProgressLocation, commands, window, workspace } from 'vscode';
import type { ExtensionContext } from 'vscode';

const execFileAsync = promisify(execFileCb);

export const PLATFORM_MAP: Record<string, { os: string; arch: string; ext: string }> = {
  'darwin-arm64': { os: 'darwin',  arch: 'arm64', ext: 'tar.gz' },
  'darwin-x64':   { os: 'darwin',  arch: 'amd64', ext: 'tar.gz' },
  'linux-arm64':  { os: 'linux',   arch: 'arm64', ext: 'tar.gz' },
  'linux-x64':    { os: 'linux',   arch: 'amd64', ext: 'tar.gz' },
  'win32-x64':    { os: 'windows', arch: 'amd64', ext: 'zip'    },
};

export type BinaryManagerDeps = {
  existsSync?: (p: string) => boolean;
  downloadString?: (url: string) => Promise<string>;
  downloadFile?: (url: string, dest: string, onProgress: (r: number, t: number) => void) => Promise<void>;
  sha256File?: (p: string) => Promise<string>;
  execFile?: (cmd: string, args: string[]) => Promise<{ stdout: string; stderr: string }>;
  platform?: () => string;
  arch?: () => string;
  tmpdir?: () => string;
  mkdtemp?: (prefix: string) => Promise<string>;
  mkdir?: (p: string, opts?: { recursive?: boolean }) => Promise<string | undefined>;
  chmod?: (p: string, mode: number) => Promise<void>;
  readdir?: (p: string) => Promise<string[]>;
  rm?: (p: string, opts?: { recursive?: boolean; force?: boolean }) => Promise<void>;
};

export async function resolveBinary(context: ExtensionContext, deps: BinaryManagerDeps = {}): Promise<string> {
  const {
    existsSync = fsSync.existsSync,
    downloadString = _downloadString,
    downloadFile = _downloadFile,
    sha256File = _sha256File,
    execFile = execFileAsync,
    platform = () => os.platform() as string,
    arch = () => os.arch(),
    tmpdir = () => os.tmpdir(),
    mkdtemp = (prefix) => fs.mkdtemp(prefix),
    mkdir = (p, opts) => fs.mkdir(p, opts),
    chmod = (p, mode) => fs.chmod(p, mode),
    readdir = (p) => fs.readdir(p),
    rm = (p, opts) => fs.rm(p, opts),
  } = deps;

  // Step 1: User-configured binary path
  const config = workspace.getConfiguration('craft');
  const execPath = config.get<string>('lsp.executablePath', '');
  if (execPath && existsSync(execPath)) {
    return execPath;
  }

  // Step 2: Build expected path
  const version = context.extension.packageJSON.version as string;
  const resolvedArch = arch() === 'x64' ? 'x64' : arch();
  const platformKey = `${platform()}-${resolvedArch}`;
  const entry = PLATFORM_MAP[platformKey];
  if (!entry) {
    throw new Error(`Unsupported platform: ${platformKey}`);
  }

  const binaryName = platform() === 'win32' ? 'craft.exe' : 'craft';
  const binaryPath = path.join(
    context.globalStorageUri.fsPath,
    'craft-lsp',
    `v${version}`,
    platformKey,
    binaryName
  );

  // Step 3: Cache hit
  if (existsSync(binaryPath)) {
    return binaryPath;
  }

  // Steps 4–11: Download with progress
  try {
    await window.withProgress(
      {
        location: ProgressLocation.Notification,
        title: `Downloading Craft language server v${version}...`,
        cancellable: false,
      },
      async (progress) => {
        await _performDownload({
          context, version, entry, platformKey, binaryName, binaryPath,
          progress, downloadString, downloadFile, sha256File, execFile,
          tmpdir, mkdtemp, mkdir, chmod, readdir, rm,
          platformStr: platform(),
        });
      }
    );
  } catch (err) {
    // Step 12: Graceful degrade — error with Retry + Set Binary Path
    const choice = await window.showErrorMessage(
      `Failed to download Craft language server: ${(err as Error).message}`,
      'Retry',
      'Set Binary Path'
    );
    if (choice === 'Retry') {
      return resolveBinary(context, deps);
    }
    if (choice === 'Set Binary Path') {
      await commands.executeCommand('workbench.action.openSettings', 'craft.lsp.executablePath');
    }
    throw err;
  }

  return binaryPath;
}

type DownloadParams = {
  context: ExtensionContext;
  version: string;
  entry: { os: string; arch: string; ext: string };
  platformKey: string;
  binaryName: string;
  binaryPath: string;
  progress: { report(v: { message?: string; increment?: number }): void };
  platformStr: string;
  downloadString: (url: string) => Promise<string>;
  downloadFile: (url: string, dest: string, onProgress: (r: number, t: number) => void) => Promise<void>;
  sha256File: (p: string) => Promise<string>;
  execFile: (cmd: string, args: string[]) => Promise<{ stdout: string; stderr: string }>;
  tmpdir: () => string;
  mkdtemp: (prefix: string) => Promise<string>;
  mkdir: (p: string, opts?: { recursive?: boolean }) => Promise<string | undefined>;
  chmod: (p: string, mode: number) => Promise<void>;
  readdir: (p: string) => Promise<string[]>;
  rm: (p: string, opts?: { recursive?: boolean; force?: boolean }) => Promise<void>;
};

async function _performDownload(p: DownloadParams): Promise<void> {
  const { version, entry, binaryName, binaryPath } = p;
  const baseUrl = `https://github.com/tcarcao/craft/releases/download/v${version}`;
  const archiveName = `craft_${version}_${entry.os}_${entry.arch}.${entry.ext}`;

  // Step 5: Download checksums.txt
  p.progress.report({ message: 'fetching checksums...' });
  const checksums = await p.downloadString(`${baseUrl}/checksums.txt`);

  const expectedHash = checksums
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l.endsWith(archiveName))
    ?.split(/\s+/)[0];

  if (!expectedHash) {
    throw new Error(`No checksum entry found for ${archiveName}`);
  }

  // Step 6: Download archive to temp dir
  const tmpDir = await p.mkdtemp(path.join(p.tmpdir(), 'craft-lsp-'));
  const archivePath = path.join(tmpDir, archiveName);

  try {
    p.progress.report({ message: 'downloading...' });
    await p.downloadFile(`${baseUrl}/${archiveName}`, archivePath, (received, total) => {
      if (total > 0) {
        p.progress.report({ message: `${Math.round((received / total) * 100)}%` });
      }
    });

    // Step 7: Verify SHA256
    const actualHash = await p.sha256File(archivePath);
    if (actualHash !== expectedHash) {
      throw new Error(
        `Checksum mismatch for ${archiveName}: expected ${expectedHash}, got ${actualHash}`
      );
    }

    // Step 8: Extract binary
    const binaryDir = path.dirname(binaryPath);
    await p.mkdir(binaryDir, { recursive: true });

    if (entry.ext === 'tar.gz') {
      await p.execFile('tar', ['xzf', archivePath, '-C', binaryDir, binaryName]);
    } else {
      await p.execFile('powershell', [
        '-Command',
        `Expand-Archive -Path "${archivePath}" -DestinationPath "${binaryDir}" -Force`,
      ]);
    }

    // Step 9: chmod +x (Linux/macOS)
    if (p.platformStr !== 'win32') {
      await p.chmod(binaryPath, 0o755);
    }

    // Step 10: macOS Gatekeeper workaround
    if (p.platformStr === 'darwin') {
      await p.execFile('xattr', ['-dr', 'com.apple.quarantine', binaryPath]);
    }

    // Step 11: Delete old version directories
    const lspDir = path.join(p.context.globalStorageUri.fsPath, 'craft-lsp');
    const currentVersionDir = `v${version}`;
    try {
      const entries = await p.readdir(lspDir);
      await Promise.all(
        entries
          .filter((e) => e !== currentVersionDir)
          .map((e) => p.rm(path.join(lspDir, e), { recursive: true, force: true }))
      );
    } catch {
      // lspDir may not exist on first download — that's fine
    }
  } finally {
    await p.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}

export async function _sha256File(filePath: string): Promise<string> {
  const content = await fs.readFile(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
}

export function _downloadString(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'craft-vscode-extension' } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          _downloadString(res.headers.location!).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const chunks: Buffer[] = [];
        res.on('data', (c: Buffer) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        res.on('error', reject);
      })
      .on('error', reject);
  });
}

export function _downloadFile(
  url: string,
  dest: string,
  onProgress: (received: number, total: number) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'craft-vscode-extension' } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          _downloadFile(res.headers.location!, dest, onProgress).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const total = parseInt(res.headers['content-length'] ?? '0', 10);
        let received = 0;
        const ws = fsSync.createWriteStream(dest);
        res.on('data', (chunk: Buffer) => {
          received += chunk.length;
          onProgress(received, total);
        });
        res.pipe(ws);
        ws.on('finish', resolve);
        ws.on('error', reject);
        res.on('error', reject);
      })
      .on('error', reject);
  });
}
