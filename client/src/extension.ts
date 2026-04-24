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
import { resolveBinary } from './lsp/binaryManager.js';
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

async function startLanguageServer(context: ExtensionContext) {
    const binary = await resolveBinary(context);
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
