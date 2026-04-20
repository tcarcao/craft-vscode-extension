import { Service, ServiceGroup, BoundedContext } from '../types/domain';

export class ServicesViewService {
    constructor() { }

    updateServiceGroupSelectionForCurrentFile(serviceGroup: ServiceGroup, currentFileOnly: boolean) {
        if (currentFileOnly) {
            // Filter to only services in current file for selection calculation
            this.updateServiceGroupSelectionWithFilter(serviceGroup, (service) => service.inCurrentFile);
        } else {
            this.updateServiceGroupSelection(serviceGroup);
        }
    }

    private updateServiceGroupSelectionWithFilter(serviceGroup: ServiceGroup, serviceFilter: (service: Service) => boolean) {
        const relevantServices = serviceGroup.services.filter(serviceFilter);

        relevantServices.forEach(service => {
            const relevantContexts = service.boundedContexts.filter(bc => serviceFilter(service) && bc.inCurrentFile);

            relevantContexts.forEach(boundedContext => {
                if (boundedContext.useCases.length === 0) {
                    return;
                }

                const selectedInContext = boundedContext.useCases.filter(uc => uc.selected).length;

                if (selectedInContext === 0) {
                    boundedContext.selected = false;
                    boundedContext.partiallySelected = false;
                } else if (selectedInContext === boundedContext.useCases.length) {
                    boundedContext.selected = true;
                    boundedContext.partiallySelected = false;
                } else {
                    boundedContext.selected = false;
                    boundedContext.partiallySelected = true;
                }
            });

            if (relevantContexts.length === 0) {
                return;
            }

            const selectedInService = relevantContexts.filter(bc => bc.selected).length;
            const partiallySelectedContexts = relevantContexts.filter(bc => bc.partiallySelected).length;

            if (selectedInService === relevantContexts.length && relevantContexts.length > 0) {
                service.selected = true;
                service.partiallySelected = false;
            } else if (selectedInService > 0 || partiallySelectedContexts > 0) {
                service.selected = false;
                service.partiallySelected = true;
            } else {
                service.selected = false;
                service.partiallySelected = false;
            }
        });

        // Calculate group selection based only on relevant services
        const selectedCount = relevantServices.filter(s => s.selected).length;
        const partiallySelectedServices = relevantServices.filter(s => s.partiallySelected).length;

        if (selectedCount === relevantServices.length && relevantServices.length > 0) {
            serviceGroup.selected = true;
            serviceGroup.partiallySelected = false;
        } else if (selectedCount > 0 || partiallySelectedServices > 0) {
            serviceGroup.selected = false;
            serviceGroup.partiallySelected = true;
        } else {
            serviceGroup.selected = false;
            serviceGroup.partiallySelected = false;
        }
    }

    updateServiceGroupSelection(serviceGroup: ServiceGroup) {
        serviceGroup.services.forEach(service => {

            service.boundedContexts.forEach(boundedContext => {
                if (boundedContext.useCases.length === 0) {
                    return;
                }

                const selectedInContext = boundedContext.useCases.filter(uc => uc.selected).length;

                if (selectedInContext === 0) {
                    boundedContext.selected = false;
                    boundedContext.partiallySelected = false;
                } else if (selectedInContext === boundedContext.useCases.length) {
                    boundedContext.selected = true;
                    boundedContext.partiallySelected = false;
                } else {
                    boundedContext.selected = false;
                    boundedContext.partiallySelected = true;
                }
            });

            if (service.boundedContexts.length === 0) {
                return;
            }

            const selectedInService = service.boundedContexts.filter(bc => bc.selected).length;
            const partiallySelectedContexts = service.boundedContexts.filter(bc => bc.partiallySelected).length;

            if (selectedInService === service.boundedContexts.length && service.boundedContexts.length > 0) {
                service.selected = true;
                service.partiallySelected = false;
            } else if (selectedInService > 0 || partiallySelectedContexts > 0) {
                service.selected = false;
                service.partiallySelected = true;
            } else {
                service.selected = false;
                service.partiallySelected = false;
            }
        });

        const selectedCount = serviceGroup.services.filter(s => s.selected).length;
        const partiallySelectedServices = serviceGroup.services.filter(s => s.partiallySelected).length;

        if (selectedCount === serviceGroup.services.length && serviceGroup.services.length > 0) {
            serviceGroup.selected = true;
            serviceGroup.partiallySelected = false;
        } else if (selectedCount > 0 || partiallySelectedServices > 0) {
            serviceGroup.selected = false;
            serviceGroup.partiallySelected = true;
        } else {
            serviceGroup.selected = false;
            serviceGroup.partiallySelected = false;
        }
    }

    toggleServiceGroupSelection(serviceGroup: ServiceGroup, currentFileOnly = false) {
        const newSelectedState = !serviceGroup.selected && !serviceGroup.partiallySelected;
        this.toggleServiceGroupSelectionWith(serviceGroup, newSelectedState, currentFileOnly);
    }

    toggleServiceGroupSelectionWith(serviceGroup: ServiceGroup, selectedState: boolean, currentFileOnly = false) {
        const servicesToUpdate = currentFileOnly
            ? serviceGroup.services.filter(s => s.inCurrentFile)
            : serviceGroup.services;

        servicesToUpdate.forEach(service => {
            service.selected = selectedState;
            const contextsToUpdate = currentFileOnly
                ? service.boundedContexts.filter(bc => bc.inCurrentFile)
                : service.boundedContexts;

            contextsToUpdate.forEach(bc => {
                bc.selected = selectedState;
                bc.useCases.forEach(uc => uc.selected = selectedState);
            });
        });
        this.updateServiceGroupSelectionForCurrentFile(serviceGroup, currentFileOnly);
    }

    toggleServiceSelection(serviceGroup: ServiceGroup, serviceId: string, currentFileOnly = false) {
        const service = serviceGroup.services.find(s => s.id === serviceId);

        if (service) {
            const newSelectedState = !service.selected && !service.partiallySelected;
            service.selected = newSelectedState;

            const contextsToUpdate = currentFileOnly
                ? service.boundedContexts.filter(bc => bc.inCurrentFile)
                : service.boundedContexts;

            contextsToUpdate.forEach(bc => {
                bc.selected = newSelectedState;
                bc.useCases.forEach(uc => uc.selected = newSelectedState);
            });
        }
        this.updateServiceGroupSelectionForCurrentFile(serviceGroup, currentFileOnly);
    }

    toggleContextSelection(serviceGroup: ServiceGroup, service: Service, contextId: string, currentFileOnly = false) {
        const boundedContext = service.boundedContexts.find(bc => bc.id === contextId);

        if (boundedContext) {
            const newSelectedState = !boundedContext.selected && !boundedContext.partiallySelected;
            boundedContext.selected = newSelectedState;
            boundedContext.useCases.forEach(uc => uc.selected = newSelectedState);
        }
        this.updateServiceGroupSelectionForCurrentFile(serviceGroup, currentFileOnly);
    }

    toggleUseCaseSelection(serviceGroup: ServiceGroup, boundedContext: BoundedContext, useCaseId: string, currentFileOnly = false) {
        const useCase = boundedContext.useCases.find(uc => uc.id === useCaseId);

        if (useCase) {
            const newSelectedState = !useCase.selected;
            useCase.selected = newSelectedState;  
        } 
        this.updateServiceGroupSelectionForCurrentFile(serviceGroup, currentFileOnly);  
    }

    public selectAll(serviceGroups: ServiceGroup[], currentFileOnly: boolean): void {
        serviceGroups.forEach(serviceGroup => {
            if (!currentFileOnly || serviceGroup.inCurrentFile) {
                this.toggleServiceGroupSelectionWith(serviceGroup, true);
            }
        });
    }

    public selectNone(serviceGroups: ServiceGroup[]): void {
        serviceGroups.forEach(serviceGroup => {
            this.toggleServiceGroupSelectionWith(serviceGroup, false);
        });
    }
}