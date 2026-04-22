// client/src/extension.ts
import * as os from 'os';
import * as path from 'path';
import { workspace, ExtensionContext, window } from 'vscode';
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient/node';
import { registerPreviewCommands, cleanUpPreviewCommands } from './commands';
import { DomainsViewProvider } from './providers/domainsViewProvider';
import { DomainsViewService } from './services/domainsViewService';
import { ServicesViewProvider } from './providers/servicesViewProvider';
import { DslExtractService } from './services/dslExtractService';
import { ServicesViewService } from './services/servicesViewService';
import { Logger } from './utils/Logger';

let domainTreeProvider: DomainsViewProvider;
let serviceTreeProvider: ServicesViewProvider;
let client: LanguageClient;

export function activate(context: ExtensionContext) {
    startLanguageServer(context).then(() => {
        registerDomainView(context, client);
    }).catch(err => {
        Logger.error('Failed to start Craft language server:', err);
        window.showErrorMessage(`Craft language server failed to start: ${err.message}`);
    });
}

// craftBinaryPath returns the path to the bundled craft binary for the current
// platform. The binaries are packaged per-platform into the VSIX by GoReleaser
// and unpacked under dist/bin/ at install time.
function craftBinaryPath(context: ExtensionContext): string {
    const platform = os.platform();
    const arch = os.arch();

    let binaryName = 'craft';
    let target: string;

    if (platform === 'darwin') {
        target = arch === 'arm64' ? 'darwin-arm64' : 'darwin-x64';
    } else if (platform === 'linux') {
        target = arch === 'arm64' ? 'linux-arm64' : 'linux-x64';
    } else if (platform === 'win32') {
        binaryName = 'craft.exe';
        target = 'win32-x64';
    } else {
        target = 'linux-x64';
    }

    return context.asAbsolutePath(path.join('dist', 'bin', target, binaryName));
}

async function startLanguageServer(context: ExtensionContext) {
    const binary = craftBinaryPath(context);
    Logger.info(`Craft LSP binary: ${binary}`);

    const serverOptions: ServerOptions = {
        run: {
            command: binary,
            args: ['lsp', '--stdio'],
            transport: TransportKind.stdio
        },
        debug: {
            command: binary,
            args: ['lsp', '--stdio', '--log-file', path.join(os.tmpdir(), 'craft-lsp-debug.log')],
            transport: TransportKind.stdio
        }
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'craft' }],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/*.craft')
        },
        initializationOptions: {
            logLevel: workspace.getConfiguration('craft').get('logging.level', 'warn')
        }
    };

    client = new LanguageClient(
        'craftLanguageServer',
        'Craft Language Server',
        serverOptions,
        clientOptions
    );

    await client.start();
    Logger.info('Craft language server: connected');
    window.setStatusBarMessage('Craft language server: connected', 3000);
}

function registerDomainView(context: ExtensionContext, client: LanguageClient) {
    const extractService = new DslExtractService(client);
    const domainService = new DomainsViewService();
    const serviceTreeService = new ServicesViewService();

    domainTreeProvider = new DomainsViewProvider(
        client,
        context.extensionUri,
        extractService,
        domainService,
        context
    );

    serviceTreeProvider = new ServicesViewProvider(
        client,
        context.extensionUri,
        extractService,
        serviceTreeService,
        context
    );

    context.subscriptions.push(
        window.registerWebviewViewProvider(
            DomainsViewProvider.viewType,
            domainTreeProvider
        ),
        window.registerWebviewViewProvider(
            ServicesViewProvider.viewType,
            serviceTreeProvider
        )
    );

    registerPreviewCommands(context, domainTreeProvider, serviceTreeProvider);
}

export function deactivate(): Thenable<void> | undefined {
    cleanUpPreviewCommands();
    if (!client) {
        return undefined;
    }
    return client.stop();
}
