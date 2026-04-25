import { DslExtractService } from './dslExtractService.js';
import { LspExtractionResult } from '../../../shared/lib/types/domain-extraction.js';
import type { LanguageClient } from 'vscode-languageclient/node';

function makeService(): DslExtractService {
  return new DslExtractService({} as LanguageClient);
}

function toDomains(svc: DslExtractService, result: LspExtractionResult, currentResult: LspExtractionResult | null = null) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (svc as any).convertToDomainStructure(result, currentResult);
}

function toServiceGroups(svc: DslExtractService, result: LspExtractionResult, domains: ReturnType<typeof toDomains>, currentResult: LspExtractionResult | null = null) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (svc as any).convertToServiceGroups(result, currentResult, domains);
}

describe('DslExtractService.convertToDomainStructure', () => {
  it('returns empty array when services is empty', () => {
    const result = toDomains(makeService(), { services: [] });
    expect(result).toEqual([]);
  });

  it('groups bounded contexts under their parent domain', () => {
    const lsp: LspExtractionResult = {
      services: [
        { name: 'OrderSvc', domains: [{ name: 'Commerce', bcName: 'Orders', uri: 'file:///a.craft', line: 1 }] },
        { name: 'PaySvc',   domains: [{ name: 'Commerce', bcName: 'Payments', uri: 'file:///a.craft', line: 5 }] },
        { name: 'AuthSvc',  domains: [{ name: 'Identity', bcName: 'Auth', uri: 'file:///b.craft', line: 1 }] },
      ],
    };

    const domains = toDomains(makeService(), lsp);

    expect(domains).toHaveLength(2);

    const commerce = domains.find((d: { name: string }) => d.name === 'Commerce');
    expect(commerce).toBeDefined();
    expect(commerce.boundedContexts.map((bc: { name: string }) => bc.name)).toEqual(
      expect.arrayContaining(['Orders', 'Payments'])
    );

    const identity = domains.find((d: { name: string }) => d.name === 'Identity');
    expect(identity).toBeDefined();
    expect(identity.boundedContexts.map((bc: { name: string }) => bc.name)).toEqual(['Auth']);
  });

  it('deduplicates bounded contexts that appear in multiple services', () => {
    const lsp: LspExtractionResult = {
      services: [
        { name: 'SvcA', domains: [{ name: 'Core', bcName: 'Shared', uri: 'file:///a.craft', line: 1 }] },
        { name: 'SvcB', domains: [{ name: 'Core', bcName: 'Shared', uri: 'file:///a.craft', line: 5 }] },
      ],
    };

    const domains = toDomains(makeService(), lsp);
    const core = domains.find((d: { name: string }) => d.name === 'Core');
    expect(core.boundedContexts).toHaveLength(1);
    expect(core.boundedContexts[0].name).toBe('Shared');
  });

  it('sorts domains alphabetically with Unknown last', () => {
    const lsp: LspExtractionResult = {
      services: [
        { name: 'SvcA', domains: [{ name: 'Unknown', bcName: 'X', uri: 'file:///a.craft', line: 1 }] },
        { name: 'SvcB', domains: [{ name: 'Billing', bcName: 'Y', uri: 'file:///a.craft', line: 2 }] },
        { name: 'SvcC', domains: [{ name: 'Auth',    bcName: 'Z', uri: 'file:///a.craft', line: 3 }] },
      ],
    };

    const domains = toDomains(makeService(), lsp);
    expect(domains.map((d: { name: string }) => d.name)).toEqual(['Auth', 'Billing', 'Unknown']);
  });

  it('marks boundedContexts as inCurrentFile when they appear in currentResult', () => {
    const workspace: LspExtractionResult = {
      services: [
        { name: 'SvcA', domains: [{ name: 'Core', bcName: 'Alpha', uri: 'file:///a.craft', line: 1 }] },
        { name: 'SvcB', domains: [{ name: 'Core', bcName: 'Beta',  uri: 'file:///b.craft', line: 1 }] },
      ],
    };
    const current: LspExtractionResult = {
      services: [
        { name: 'SvcA', domains: [{ name: 'Core', bcName: 'Alpha', uri: 'file:///a.craft', line: 1 }] },
      ],
    };

    const domains = toDomains(makeService(), workspace, current);
    const core = domains.find((d: { name: string }) => d.name === 'Core');
    const alpha = core.boundedContexts.find((bc: { name: string }) => bc.name === 'Alpha');
    const beta  = core.boundedContexts.find((bc: { name: string }) => bc.name === 'Beta');

    expect(alpha.inCurrentFile).toBe(true);
    expect(beta.inCurrentFile).toBe(false);
  });
});

describe('DslExtractService.convertToServiceGroups', () => {
  it('returns empty array when services is empty', () => {
    const result = toServiceGroups(makeService(), { services: [] }, []);
    expect(result).toEqual([]);
  });

  it('groups services under their parent domain', () => {
    const lsp: LspExtractionResult = {
      services: [
        { name: 'OrderSvc', domains: [{ name: 'Commerce', bcName: 'Orders', uri: 'file:///a.craft', line: 1 }] },
        { name: 'PaySvc',   domains: [{ name: 'Commerce', bcName: 'Payments', uri: 'file:///a.craft', line: 5 }] },
        { name: 'AuthSvc',  domains: [{ name: 'Identity', bcName: 'Auth', uri: 'file:///b.craft', line: 1 }] },
      ],
    };
    const domains = toDomains(makeService(), lsp);
    const groups = toServiceGroups(makeService(), lsp, domains);

    expect(groups).toHaveLength(2);
    const commerce = groups.find((g: { name: string }) => g.name === 'Commerce');
    expect(commerce.services.map((s: { name: string }) => s.name)).toEqual(
      expect.arrayContaining(['OrderSvc', 'PaySvc'])
    );
  });

  it('marks services as inCurrentFile based on currentResult', () => {
    const lsp: LspExtractionResult = {
      services: [
        { name: 'SvcA', domains: [{ name: 'Core', bcName: 'Alpha', uri: 'file:///a.craft', line: 1 }] },
        { name: 'SvcB', domains: [{ name: 'Core', bcName: 'Alpha', uri: 'file:///a.craft', line: 5 }] },
      ],
    };
    const current: LspExtractionResult = {
      services: [{ name: 'SvcA', domains: [{ name: 'Core', bcName: 'Alpha', uri: 'file:///a.craft', line: 1 }] }],
    };
    const domains = toDomains(makeService(), lsp, current);
    const groups = toServiceGroups(makeService(), lsp, domains, current);

    const core = groups.find((g: { name: string }) => g.name === 'Core');
    const svcA = core.services.find((s: { name: string }) => s.name === 'SvcA');
    const svcB = core.services.find((s: { name: string }) => s.name === 'SvcB');

    expect(svcA.inCurrentFile).toBe(true);
    expect(svcB.inCurrentFile).toBe(false);
  });
});
