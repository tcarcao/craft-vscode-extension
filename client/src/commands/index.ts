// client/src/commands/index.ts
import { commands, ExtensionContext } from 'vscode';
import { handlePreviewC4, handlePreviewSelectedC4, handlePreviewPartialC4, cleanUpPreviewC4 } from './previewC4';
import { handlePreviewDomain, handlePreviewDomainsFromSelection, handlePreviewPartialDomains, handlePreviewPartialArchitecture, cleanUpPreviewDomain } from './previewDomain';
import { registerPreviewMermaidDomain } from './previewMermaidDomain';
import { registerPreviewMermaidSequence } from './previewMermaidSequence';
import { registerPreviewMermaidC4 } from './previewMermaidC4';
import { DomainsViewProvider } from '../providers/domainsViewProvider';
import { ServicesViewProvider } from '../providers/servicesViewProvider';

export function registerPreviewCommands(context: ExtensionContext, domainsProvider?: DomainsViewProvider, servicesProvider?: ServicesViewProvider) {
    registerPreviewMermaidDomain(context);
    registerPreviewMermaidSequence(context);
    registerPreviewMermaidC4(context);
    context.subscriptions.push(
        commands.registerCommand('craft.previewC4', () =>
            handlePreviewC4()
        ),
        commands.registerCommand('craft.previewSelectedC4', () =>
            handlePreviewSelectedC4()
        ),
        commands.registerCommand('craft.previewDomain', () =>
            handlePreviewDomain()
        ),
        commands.registerCommand('craft.previewDomainsFromSelection', () =>
            handlePreviewDomainsFromSelection()
        ),
        commands.registerCommand('craft.previewPartialDSL', (partialDSL, diagramType, domainDiagramType = 'domain') => {
            switch(diagramType) {
                case "C4":
                    handlePreviewPartialC4(partialDSL);
                    break;
                case "Architecture":
                    handlePreviewPartialArchitecture(partialDSL, domainDiagramType);
                    break;
                case "Domain":
                default:
                    handlePreviewPartialDomains(partialDSL, domainDiagramType);
                    break;
            }
        }),
        commands.registerCommand('craft.previewC4PartialDSL', (partialDSL, focusInfo) => {
            handlePreviewPartialC4(partialDSL, focusInfo);
        }),
        commands.registerCommand('craft.openSettings', () => {
            commands.executeCommand('workbench.action.openSettings', 'craft.');
        }),
        commands.registerCommand('craft.selectAllDomains', () => {
            domainsProvider?.sendSelectionCommand('selectAll');
        }),
        commands.registerCommand('craft.selectNoneDomains', () => {
            domainsProvider?.sendSelectionCommand('selectNone');
        }),
        commands.registerCommand('craft.selectCurrentFileDomains', () => {
            domainsProvider?.sendSelectionCommand('selectCurrentFile');
        }),
        commands.registerCommand('craft.selectAllServices', () => {
            servicesProvider?.sendSelectionCommand('selectAll');
        }),
        commands.registerCommand('craft.selectNoneServices', () => {
            servicesProvider?.sendSelectionCommand('selectNone');
        }),
        commands.registerCommand('craft.refreshDomains', () => {
            domainsProvider?.sendRefreshCommand();
        }),
        commands.registerCommand('craft.previewDomains', () => {
            domainsProvider?.sendPreviewCommand();
        }),
        commands.registerCommand('craft.refreshServices', () => {
            servicesProvider?.sendRefreshCommand();
        }),
        commands.registerCommand('craft.previewServices', () => {
            servicesProvider?.sendPreviewCommand();
        }),
        commands.registerCommand('craft.toggleDomainOptions', () => {
            domainsProvider?.sendToggleOptionsCommand();
        }),
        commands.registerCommand('craft.toggleServiceOptions', () => {
            servicesProvider?.sendToggleOptionsCommand();
        })
    );
}

export function cleanUpPreviewCommands() {
    cleanUpPreviewC4();
    cleanUpPreviewDomain();
}