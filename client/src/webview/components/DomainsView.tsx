import React, { useState, useEffect } from 'react';
import { Domain, BoundedContext, UseCase, UseCaseReference } from '../../types/domain';
import { WebviewMessages, ProviderMessages, SelectionActions } from '../../types/messages';

interface DomainsViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vscode: any;
}

interface ViewState {
  domains: Domain[];
  viewMode: 'current' | 'workspace';
  diagramMode: 'detailed' | 'architecture';
  diagramType: 'domain' | 'sequence';
  optionsExpanded: boolean;
  isLoading: boolean;
}

export const DomainsView: React.FC<DomainsViewProps> = ({ vscode }) => {
  const [state, setState] = useState<ViewState>({
    domains: [],
    viewMode: 'current',
    diagramMode: 'detailed',
    diagramType: 'domain',
    optionsExpanded: false,
    isLoading: true
  });

  // Helper function to merge new domain data while preserving UI state
  const mergeDomainData = (newDomains: Domain[], existingDomains: Domain[]): Domain[] => {
    return newDomains.map(newDomain => {
      const existingDomain = existingDomains.find(d => d.id === newDomain.id);
      if (!existingDomain) {
        return newDomain; // New domain, use as-is
      }

      return {
        ...newDomain,
        selected: existingDomain.selected !== undefined ? existingDomain.selected : newDomain.selected,
        partiallySelected: existingDomain.partiallySelected !== undefined ? existingDomain.partiallySelected : newDomain.partiallySelected,
        expanded: existingDomain.expanded !== undefined ? existingDomain.expanded : newDomain.expanded,
        boundedContexts: newDomain.boundedContexts.map(newBoundedContext => {
          const existingContext = existingDomain.boundedContexts.find(bc => bc.id === newBoundedContext.id);
          if (!existingContext) {
            return newBoundedContext; // New bounded context, use as-is
          }

          return {
            ...newBoundedContext,
            selected: existingContext.selected !== undefined ? existingContext.selected : newBoundedContext.selected,
            partiallySelected: existingContext.partiallySelected !== undefined ? existingContext.partiallySelected : newBoundedContext.partiallySelected,
            expanded: existingContext.expanded !== undefined ? existingContext.expanded : newBoundedContext.expanded,
            useCases: newBoundedContext.useCases.map(newUseCase => {
              const existingUseCase = existingContext.useCases.find(uc => uc.id === newUseCase.id);
              return {
                ...newUseCase,
                selected: existingUseCase?.selected !== undefined ? existingUseCase.selected : newUseCase.selected
              };
            })
          };
        })
      };
    });
  };

  // Listen for data from extension
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      
      switch (message.type) {
        case ProviderMessages.INITIAL_DATA:
          setState(prevState => ({
            ...prevState,
            ...message.data,
            isLoading: false
          }));
          break;
        case ProviderMessages.DATA_REFRESH:
          setState(prevState => ({
            ...prevState,
            domains: mergeDomainData(message.data.domains, prevState.domains),
            viewMode: message.data.viewMode || prevState.viewMode
          }));
          break;
        case ProviderMessages.SELECTION_COMMAND:
          switch (message.action) {
            case SelectionActions.SELECT_ALL:
              selectAll();
              break;
            case SelectionActions.SELECT_NONE:
              selectNone();
              break;
            case SelectionActions.SELECT_CURRENT_FILE:
              selectCurrentFileOnly();
              break;
          }
          break;
        case ProviderMessages.REFRESH_COMMAND:
          handleRefresh();
          break;
        case ProviderMessages.PREVIEW_COMMAND:
          setState(currentState => {
            handlePreviewWithState(currentState);
            return currentState;
          });
          break;
        case ProviderMessages.TOGGLE_OPTIONS_COMMAND:
          toggleDiagramOptions();
          break;
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Request initial data
    vscode.postMessage({ type: WebviewMessages.READY });

    return () => window.removeEventListener('message', handleMessage);
  }, [vscode]);


  // ===== REACT STATE MANAGEMENT =====

  const toggleDomain = (domainId: string) => {
    setState(prev => ({
      ...prev,
      domains: prev.domains.map(domain => {
        if (domain.id === domainId) {
          const newSelected = !domain.selected && !domain.partiallySelected;
          return {
            ...domain,
            selected: newSelected,
            partiallySelected: false,
            boundedContexts: domain.boundedContexts.map(bc => ({
              ...bc,
              selected: newSelected,
              useCases: bc.useCases.map(uc => ({
                ...uc,
                selected: newSelected
              }))
            }))
          };
        }
        return domain;
      })
    }));
  };

  const toggleUseCase = (domainId: string, contextId: string, useCaseId: string) => {
    setState(prev => ({
      ...prev,
      domains: prev.domains.map(domain => {
        if (domain.id === domainId) {
          const updatedDomain = {
            ...domain,
            boundedContexts: domain.boundedContexts.map(boundedContext => {
              if (boundedContext.id === contextId) {
                const updatedContext = {
                  ...boundedContext,
                  useCases: boundedContext.useCases.map(useCase =>
                    useCase.id === useCaseId
                      ? { ...useCase, selected: !useCase.selected }
                      : useCase
                  )
                };

                // Update bounded context selection state based on use cases
                const selectedUseCases = updatedContext.useCases.filter(uc => uc.selected);
                const totalUseCases = updatedContext.useCases.length;

                if (selectedUseCases.length === 0) {
                  updatedContext.selected = false;
                  updatedContext.partiallySelected = false;
                } else if (selectedUseCases.length === totalUseCases) {
                  updatedContext.selected = true;
                  updatedContext.partiallySelected = false;
                } else {
                  updatedContext.selected = false;
                  updatedContext.partiallySelected = true;
                }

                return updatedContext;
              }
              return boundedContext;
            })
          };

          // Update domain selection state based on bounded contexts
          const selectedContexts = updatedDomain.boundedContexts.filter(bc => bc.selected);
          const partialContexts = updatedDomain.boundedContexts.filter(bc => bc.partiallySelected);
          const totalContexts = updatedDomain.boundedContexts.length;

          if (selectedContexts.length === 0 && partialContexts.length === 0) {
            updatedDomain.selected = false;
            updatedDomain.partiallySelected = false;
          } else if (selectedContexts.length === totalContexts) {
            updatedDomain.selected = true;
            updatedDomain.partiallySelected = false;
          } else {
            updatedDomain.selected = false;
            updatedDomain.partiallySelected = true;
          }
          
          return updatedDomain;
        }
        return domain;
      })
    }));
  };

  const toggleBoundedContext = (domainId: string, contextId: string) => {
    setState(prev => ({
      ...prev,
      domains: prev.domains.map(domain => {
        if (domain.id === domainId) {
          const updatedDomain = {
            ...domain,
            boundedContexts: domain.boundedContexts.map(boundedContext => {
              if (boundedContext.id === contextId) {
                const newSelected = !boundedContext.selected && !boundedContext.partiallySelected;
                return {
                  ...boundedContext,
                  selected: newSelected,
                  partiallySelected: false,
                  useCases: boundedContext.useCases.map(uc => ({
                    ...uc,
                    selected: newSelected
                  }))
                };
              }
              return boundedContext;
            })
          };

          // Update domain selection state based on bounded contexts
          const selectedContexts = updatedDomain.boundedContexts.filter(bc => bc.selected);
          const partialContexts = updatedDomain.boundedContexts.filter(bc => bc.partiallySelected);
          const totalContexts = updatedDomain.boundedContexts.length;

          if (selectedContexts.length === 0 && partialContexts.length === 0) {
            updatedDomain.selected = false;
            updatedDomain.partiallySelected = false;
          } else if (selectedContexts.length === totalContexts) {
            updatedDomain.selected = true;
            updatedDomain.partiallySelected = false;
          } else {
            updatedDomain.selected = false;
            updatedDomain.partiallySelected = true;
          }
          
          return updatedDomain;
        }
        return domain;
      })
    }));
  };

  const toggleDomainExpansion = (domainId: string) => {
    setState(prev => ({
      ...prev,
      domains: prev.domains.map(domain =>
        domain.id === domainId 
          ? { ...domain, expanded: !domain.expanded }
          : domain
      )
    }));
  };

  const toggleContextExpansion = (domainId: string, contextId: string) => {
    setState(prev => ({
      ...prev,
      domains: prev.domains.map(domain => {
        if (domain.id === domainId) {
          return {
            ...domain,
            boundedContexts: domain.boundedContexts.map(boundedContext =>
              boundedContext.id === contextId
                ? { ...boundedContext, expanded: !boundedContext.expanded }
                : boundedContext
            )
          };
        }
        return domain;
      })
    }));
  };

  const setViewMode = (mode: 'current' | 'workspace') => {
    setState(prev => ({ ...prev, viewMode: mode }));
    vscode.postMessage({ type: WebviewMessages.SET_VIEW_MODE, viewMode: mode });
  };

  const setDiagramMode = (mode: 'detailed' | 'architecture') => {
    setState(prev => ({ ...prev, diagramMode: mode }));
  };

  const setDiagramType = (type: 'domain' | 'sequence') => {
    setState(prev => ({ ...prev, diagramType: type }));
  };

  const toggleDiagramOptions = () => {
    setState(prev => ({ ...prev, optionsExpanded: !prev.optionsExpanded }));
  };

  const selectAll = () => {
    setState(prev => ({
      ...prev,
      domains: prev.domains.map(domain => ({
        ...domain,
        selected: true,
        partiallySelected: false,
        boundedContexts: domain.boundedContexts.map(bc => ({
          ...bc,
          selected: true,
          partiallySelected: false,
          useCases: bc.useCases.map(uc => ({ ...uc, selected: true }))
        }))
      }))
    }));
  };

  const selectNone = () => {
    setState(prev => ({
      ...prev,
      domains: prev.domains.map(domain => ({
        ...domain,
        selected: false,
        partiallySelected: false,
        boundedContexts: domain.boundedContexts.map(bc => ({
          ...bc,
          selected: false,
          partiallySelected: false,
          useCases: bc.useCases.map(uc => ({ ...uc, selected: false }))
        }))
      }))
    }));
  };

  const selectCurrentFileOnly = () => {
    setState(prev => ({
      ...prev,
      domains: prev.domains.map(domain => {
        const shouldSelect = domain.inCurrentFile;
        return {
          ...domain,
          selected: shouldSelect,
          partiallySelected: false,
          boundedContexts: domain.boundedContexts.map(bc => {
            const contextShouldSelect = shouldSelect && bc.inCurrentFile;
            return {
              ...bc,
              selected: contextShouldSelect,
              partiallySelected: false,
              useCases: bc.useCases.map(uc => ({ ...uc, selected: contextShouldSelect }))
            };
          })
        };
      })
    }));
  };

  const toggleReferences = (domainId: string, contextId: string) => {
    setState(prev => ({
      ...prev,
      domains: prev.domains.map(domain => {
        if (domain.id === domainId) {
          return {
            ...domain,
            boundedContexts: domain.boundedContexts.map(boundedContext =>
              boundedContext.id === contextId
                ? { ...boundedContext, showReferences: !boundedContext.showReferences }
                : boundedContext
            )
          };
        }
        return domain;
      })
    }));
  };

  const handleRefresh = () => {
    vscode.postMessage({ type: WebviewMessages.REFRESH });
  };

  const handlePreviewWithState = (currentState: ViewState) => {
    const selectedItems = getSelectedItemsFromState(currentState);
    
    // if (selectedItems.useCases.length === 0) {
    //   // Show a helpful message when no use cases are selected
    //   vscode.postMessage({
    //     type: WebviewMessages.SHOW_INFORMATION,
    //     message: 'Please select at least one use case to preview the domain diagram.'
    //   });
    //   return;
    // }
    
    vscode.postMessage({
      type: WebviewMessages.PREVIEW,
      selectedDomains: selectedItems.domains,
      selectedUseCases: selectedItems.useCases,
      diagramMode: currentState.diagramMode,
      diagramType: currentState.diagramType
    });
  };

  const getSelectedItemsFromState = (currentState: ViewState) => {
    const selectedDomains: Domain[] = [];
    const selectedUseCases: UseCase[] = [];
    
    currentState.domains.forEach(domain => {
      if (domain.selected || domain.partiallySelected) {
        selectedDomains.push(domain);
      }
      domain.boundedContexts.forEach(boundedContext => {
        boundedContext.useCases.forEach(useCase => {
          if (useCase.selected) {
            selectedUseCases.push(useCase);
          }
        });
      });
    });
    
    return { domains: selectedDomains, useCases: selectedUseCases };
  };


  // ===== CALCULATED VALUES =====

  const selectedCount = {
    domains: state.domains.filter(d => d.selected).length,
    boundedContexts: state.domains.reduce((acc, domain) =>
      acc + domain.boundedContexts.filter(bc => bc.selected).length, 0),
    useCases: state.domains.reduce((acc, domain) =>
      acc + domain.boundedContexts.reduce((bcAcc, boundedContext) =>
        bcAcc + boundedContext.useCases.filter(uc => uc.selected).length, 0), 0)
  };


  // ===== RENDER =====

  if (state.isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div>Loading domains...</div>
      </div>
    );
  }

  return (
    <div className="domains-view">
      {/* Header */}
      <div className="header">

        <div className="view-mode-toggle">
          <button 
            className={`mode-btn ${state.viewMode === 'current' ? 'active' : ''}`}
            onClick={() => setViewMode('current')}
            title="Show domains from current file only"
          >
            Current File
          </button>
          <button 
            className={`mode-btn ${state.viewMode === 'workspace' ? 'active' : ''}`}
            onClick={() => setViewMode('workspace')}
            title="Show domains from entire workspace"
          >
            Workspace
          </button>
        </div>
        
        {state.optionsExpanded && (
          <div className="diagram-options">
            <div className="options-content">
              <div className="option-group">
                <label className="option-label">Type:</label>
                <div className="option-toggle">
                  <button
                    className={`option-btn ${state.diagramType === 'domain' ? 'active' : ''}`}
                    onClick={() => setDiagramType('domain')}
                    title="Show domain diagram"
                  >
                    Domain
                  </button>
                  <button
                    className={`option-btn ${state.diagramType === 'sequence' ? 'active' : ''}`}
                    onClick={() => setDiagramType('sequence')}
                    title="Show sequence diagram"
                  >
                    Sequence
                  </button>
                </div>
              </div>

              <div className="option-group">
                <label className="option-label">Mode:</label>
                <div className="option-toggle">
                  <button
                    className={`option-btn ${state.diagramMode === 'detailed' ? 'active' : ''}`}
                    onClick={() => setDiagramMode('detailed')}
                    title="Show detailed domain diagram with use cases"
                  >
                    Detailed
                  </button>
                  <button
                    className={`option-btn ${state.diagramMode === 'architecture' ? 'active' : ''}`}
                    onClick={() => setDiagramMode('architecture')}
                    title="Show architecture view - context connections only"
                  >
                    Architecture
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="selection-info">
          <div className="selection-summary">
            <span className="count-item">
              <span className="count-number">{selectedCount.useCases}</span>
              <span className="count-label">use cases</span>
            </span>
            <span className="count-separator">•</span>
            <span className="count-item">
              <span className="count-number">{selectedCount.boundedContexts}</span>
              <span className="count-label">contexts</span>
            </span>
            <span className="count-separator">•</span>
            <span className="count-item">
              <span className="count-number">{selectedCount.domains}</span>
              <span className="count-label">domains</span>
            </span>
          </div>
        </div>
      </div>

      {/* Domains list */}
      <div className="tree-container">
        {state.domains.length === 0 ? (
          <div className="no-domains">No domains found</div>
        ) : (
          state.domains.map(domain => (
            <DomainItem
              key={domain.id}
              domain={domain}
              onToggleDomain={() => toggleDomain(domain.id)}
              onToggleBoundedContext={(contextId) => toggleBoundedContext(domain.id, contextId)}
              onToggleUseCase={(contextId, useCaseId) => toggleUseCase(domain.id, contextId, useCaseId)}
              onToggleExpansion={() => toggleDomainExpansion(domain.id)}
              onToggleContextExpansion={(contextId) => toggleContextExpansion(domain.id, contextId)}
              onToggleReferences={(contextId) => toggleReferences(domain.id, contextId)}
              viewMode={state.viewMode}
            />
          ))
        )}
      </div>

    </div>
  );
};

interface DomainItemProps {
  domain: Domain;
  onToggleDomain: () => void;
  onToggleBoundedContext: (contextId: string) => void;
  onToggleUseCase: (contextId: string, useCaseId: string) => void;
  onToggleExpansion: () => void;
  onToggleContextExpansion: (contextId: string) => void;
  onToggleReferences: (contextId: string) => void;
  viewMode: 'current' | 'workspace';
}

const DomainItem: React.FC<DomainItemProps> = ({
  domain,
  onToggleDomain,
  onToggleBoundedContext,
  onToggleUseCase,
  onToggleExpansion,
  onToggleContextExpansion,
  onToggleReferences,
  viewMode
}) => {
  const domainClasses = [
    'tree-node',
    'domain-node',
    domain.selected ? 'selected' : '',
    domain.partiallySelected ? 'partially-selected' : '',
    !domain.inCurrentFile && viewMode === 'workspace' ? 'non-current-file' : ''
  ].filter(Boolean).join(' ');

  // Calculate actual counters from current state
  const totalUseCases = domain.boundedContexts.reduce((total, bc) => total + bc.useCases.length, 0);
  const selectedUseCases = domain.boundedContexts.reduce((total, bc) =>
    total + bc.useCases.filter(uc => uc.selected).length, 0);

  return (
    <div className={domainClasses}>
      <div className="node-content" onClick={onToggleDomain}>
        <span 
          className="expander" 
          onClick={(e) => { e.stopPropagation(); onToggleExpansion(); }}
          title={domain.expanded ? 'Collapse' : 'Expand'}
          role="button"
          tabIndex={0}
        >
          {domain.expanded ? '▼' : '▶'}
        </span>
        
        <div className="checkbox-container">
          <div 
            className={`custom-checkbox ${domain.selected ? 'checked' : domain.partiallySelected ? 'indeterminate' : ''}`}
            title="Select/deselect domain"
            role="checkbox"
            aria-checked={domain.selected ? 'true' : domain.partiallySelected ? 'mixed' : 'false'}
          >
            <span className="checkbox-symbol">
              {domain.selected ? '✓' : domain.partiallySelected ? '▣' : '○'}
            </span>
          </div>
        </div>
        
        <div className="node-info">
          <div className="node-header">
            <span className="node-name">{domain.name}</span>
            <span className="use-case-badge" title={`${selectedUseCases} of ${totalUseCases} use cases selected`}>
              {selectedUseCases}/{totalUseCases}
            </span>
          </div>
          <div className="node-meta">
            {domain.boundedContexts.length} context{domain.boundedContexts.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      <div className="node-children" style={{ display: domain.expanded ? 'block' : 'none' }} role="group">
        {domain.boundedContexts.map(boundedContext => (
          <BoundedContextItem
            key={boundedContext.id}
            boundedContext={boundedContext}
            onToggleBoundedContext={() => onToggleBoundedContext(boundedContext.id)}
            onToggleUseCase={(useCaseId) => onToggleUseCase(boundedContext.id, useCaseId)}
            onToggleExpansion={() => onToggleContextExpansion(boundedContext.id)}
            onToggleReferences={() => onToggleReferences(boundedContext.id)}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
};

interface BoundedContextItemProps {
  boundedContext: BoundedContext;
  onToggleBoundedContext: () => void;
  onToggleUseCase: (useCaseId: string) => void;
  onToggleExpansion: () => void;
  onToggleReferences: () => void;
  viewMode: 'current' | 'workspace';
}

const BoundedContextItem: React.FC<BoundedContextItemProps> = ({
  boundedContext,
  onToggleBoundedContext,
  onToggleUseCase,
  onToggleExpansion,
  onToggleReferences,
  viewMode
}) => {
  const isEmpty = boundedContext.useCases.length === 0;
  const hasReferences = boundedContext.referencedIn && boundedContext.referencedIn.length > 0;
  const isSelectable = !isEmpty || hasReferences;

  const selectedCount = boundedContext.useCases.filter(uc => uc.selected).length;
  const refIndicator = hasReferences ? (
    <span className="ref-indicator" title={`${boundedContext.referencedIn.length} cross-references`}>
      🔗 {boundedContext.referencedIn.length}
    </span>
  ) : null;

  const contextClasses = [
    'tree-node',
    'subdomain-node',
    !isSelectable ? 'empty-subdomain-node' : '',
    boundedContext.selected ? 'selected' : '',
    boundedContext.partiallySelected ? 'partially-selected' : '',
    !boundedContext.inCurrentFile && viewMode === 'workspace' ? 'non-current-file' : ''
  ].filter(Boolean).join(' ');

  const checkboxSymbol = isEmpty ? '∅' : (boundedContext.selected ? '✓' : boundedContext.partiallySelected ? '▣' : '○');
  const checkboxClass = boundedContext.selected ? 'checked' : (boundedContext.partiallySelected ? 'indeterminate' : '');
  const clickHandler = isSelectable ? onToggleBoundedContext : undefined;

  return (
    <div className={contextClasses}>
      <div className="node-content" onClick={clickHandler}>
        {isSelectable ? (
          <span
            className="expander"
            onClick={(e) => { e.stopPropagation(); onToggleExpansion(); }}
            title={boundedContext.expanded ? 'Collapse' : 'Expand'}
            role="button"
            tabIndex={0}
          >
            {boundedContext.expanded ? '▼' : '▶'}
          </span>
        ) : (
          <span className="expander-placeholder"></span>
        )}

        <div className="checkbox-container">
          <div
            className={`custom-checkbox ${checkboxClass}`}
            title={!isSelectable ? 'No use cases or references to select' : 'Select/deselect bounded context'}
            role="checkbox"
            aria-checked={!isSelectable ? 'false' : (boundedContext.selected ? 'true' : boundedContext.partiallySelected ? 'mixed' : 'false')}
          >
            <span className="checkbox-symbol">
              {checkboxSymbol}
            </span>
          </div>
        </div>

        <div className="node-info">
          <div className="node-header">
            <span className="node-name">{boundedContext.name}{refIndicator}</span>
            <span className={`use-case-badge ${!isSelectable ? 'empty' : ''}`}
                  title={!isSelectable ? 'No use cases or references' : `${selectedCount} of ${boundedContext.useCases.length} use cases selected`}>
              {!isSelectable ? '0' : `${selectedCount}/${boundedContext.useCases.length}`}
            </span>
          </div>
        </div>
      </div>

      <div className="node-children" style={{ display: boundedContext.expanded ? 'block' : 'none' }} role="group">
        {boundedContext.expanded && (
          <>
            {/* Entry Point use cases */}
            {!isEmpty && (
              <div className="entry-point-usecases">
                {boundedContext.useCases.map(useCase => (
                  <UseCaseItem
                    key={useCase.id}
                    useCase={useCase}
                    onToggle={() => onToggleUseCase(useCase.id)}
                  />
                ))}
              </div>
            )}

            {/* Cross-references */}
            {hasReferences && (
              <div className="cross-references">
                <div className="section-header">
                  <span className="section-icon">🔗</span>
                  <span className="section-title">Also Involved In</span>
                  <button
                    className="toggle-refs-btn"
                    onClick={(e) => { e.stopPropagation(); onToggleReferences(); }}
                  >
                    {boundedContext.showReferences ? 'Hide' : 'Show'} ({boundedContext.referencedIn.length})
                  </button>
                </div>
                {boundedContext.showReferences && (
                  <CrossReferencesList references={boundedContext.referencedIn} />
                )}
              </div>
            )}

            {/* Empty state */}
            {isEmpty && !hasReferences && (
              <div className="empty-subdomain">No use cases defined</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

interface UseCaseItemProps {
  useCase: UseCase;
  onToggle: () => void;
}

const UseCaseItem: React.FC<UseCaseItemProps> = ({ useCase, onToggle }) => {
  const useCaseClasses = [
    'tree-node',
    'usecase-node',
    useCase.selected ? 'selected' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={useCaseClasses}>
      <div className="node-content" onClick={onToggle}>
        <div className="checkbox-container">
          <div 
            className={`custom-checkbox ${useCase.selected ? 'checked' : ''}`}
            title="Select/deselect use case"
            role="checkbox"
            aria-checked={useCase.selected ? 'true' : 'false'}
          >
            <span className="checkbox-symbol">
              {useCase.selected ? '✓' : '○'}
            </span>
          </div>
        </div>
        
        <div className="node-info">
          <div className="node-header">
            <span className="node-name">{useCase.name}</span>
          </div>
          {useCase.description && (
            <div className="node-description">{useCase.description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

interface CrossReferencesListProps {
  references: UseCaseReference[];
}

const CrossReferencesList: React.FC<CrossReferencesListProps> = ({ references }) => {
  const getRoleIcon = (role: 'entry-point' | 'involved'): string => {
    const icons = {
      'entry-point': '🎯',
      'involved': '🔗'
    };
    return icons[role];
  };

  const navigateToUseCase = (_useCaseId: string) => {
    // TODO: Implement navigation to use case
  };

  return (
    <div className="references-list">
      {references.map(ref => (
        <div 
          key={ref.useCaseId}
          className={`reference-item ${ref.role}`} 
          onClick={() => navigateToUseCase(ref.useCaseId)}
        >
          <div className="ref-content">
            <span className="ref-role-icon">{getRoleIcon(ref.role)}</span>
            <div className="ref-info">
              <div className="ref-usecase">{ref.useCaseName}</div>
              <div className="ref-domain">{ref.domainName}</div>
            </div>
            <span className="ref-role-badge">
              {ref.role === 'entry-point' ? 'entry' : 'involved'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};