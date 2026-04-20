import { Domain } from '../types/domain';

export class DomainsViewService {

    constructor() { }

    /**
     * Update domain counts and selection states based on bounded context/usecase selections
     */
    updateDomainCounts(domain: Domain): void {
        let totalUseCases = 0;
        let selectedUseCases = 0;
        let selectedBoundedContexts = 0;

        domain.boundedContexts.forEach(boundedContext => {
            totalUseCases += boundedContext.useCases.length;

            const selectedInContext = boundedContext.useCases.filter(uc => uc.selected).length;
            selectedUseCases += selectedInContext;

            // Update bounded context selection state
            if (boundedContext.useCases.length === 0) {
                // Empty bounded context - not selectable
                boundedContext.selected = false;
                boundedContext.partiallySelected = false;
            } else if (selectedInContext === 0) {
                boundedContext.selected = false;
                boundedContext.partiallySelected = false;
            } else if (selectedInContext === boundedContext.useCases.length) {
                boundedContext.selected = true;
                boundedContext.partiallySelected = false;
                selectedBoundedContexts++;
            } else {
                boundedContext.selected = false;
                boundedContext.partiallySelected = true;
            }
        });

        domain.totalUseCases = totalUseCases;
        domain.selectedUseCases = selectedUseCases;
        domain.selectedBoundedContexts = selectedBoundedContexts;

        // Update domain selection state
        const nonEmptyBoundedContexts = domain.boundedContexts.filter(bc => bc.useCases.length > 0);
        const selectedNonEmptyContexts = nonEmptyBoundedContexts.filter(bc => bc.selected).length;
        const partiallySelectedNonEmptyContexts = nonEmptyBoundedContexts.filter(bc => bc.partiallySelected).length;

        if (selectedNonEmptyContexts === nonEmptyBoundedContexts.length && nonEmptyBoundedContexts.length > 0) {
            domain.selected = true;
            domain.partiallySelected = false;
        } else if (selectedNonEmptyContexts > 0 || partiallySelectedNonEmptyContexts > 0) {
            domain.selected = false;
            domain.partiallySelected = true;
        } else {
            domain.selected = false;
            domain.partiallySelected = false;
        }
    }

    public toggleDomainSelection(domain: Domain, selected: boolean): void {
        domain.boundedContexts.forEach(boundedContext => {
            boundedContext.selected = selected;
            boundedContext.useCases.forEach(useCase => {
                useCase.selected = selected;
            });
        });
        this.updateDomainCounts(domain);
    }

    public toggleContextSelection(domain: Domain, contextId: string, selected: boolean): void {
        const boundedContext = domain.boundedContexts.find(bc => bc.id === contextId);
        if (boundedContext && boundedContext.useCases.length > 0) {
            boundedContext.selected = selected;
            boundedContext.useCases.forEach(useCase => {
                useCase.selected = selected;
                this.updateDomainCounts(domain);
            });
        }
    }

    public toggleUseCaseSelection(domain: Domain, contextId: string, useCaseId: string): void {
        const boundedContext = domain.boundedContexts.find(bc => bc.id === contextId);
        if (boundedContext) {
            const useCase = boundedContext.useCases.find(uc => uc.id === useCaseId);
            if (useCase) {
                useCase.selected = !useCase.selected;
                this.updateDomainCounts(domain);
            }
        }
    }

    public selectAll(domains: Domain[], currentFileOnly: boolean): void {
        domains.forEach(domain => {
            if (!currentFileOnly || domain.inCurrentFile) {
                this.toggleDomainSelection(domain, true);
            }
        });
    }

    public selectNone(domains: Domain[]): void {
        domains.forEach(domain => {
            this.toggleDomainSelection(domain, false);
        });
    }
}