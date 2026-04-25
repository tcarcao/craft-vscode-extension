import { DslExtractService } from './dslExtractService.js';
import { CraftExtractionResult } from '../../../shared/lib/types/domain-extraction.js';
import type { LanguageClient } from 'vscode-languageclient/node';

function makeService(): DslExtractService {
  return new DslExtractService({} as LanguageClient);
}

function toDomains(svc: DslExtractService, result: CraftExtractionResult) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (svc as any).buildDomains(result);
}

function toServiceGroups(
  svc: DslExtractService,
  result: CraftExtractionResult,
  domains: ReturnType<typeof toDomains>
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (svc as any).buildServiceGroups(result, domains);
}

const emptyResult = (): CraftExtractionResult => ({
  services: [],
  domains: [],
  useCases: [],
  actors: [],
  actorBlocks: [],
  archs: [],
});

describe('DslExtractService.buildDomains', () => {
  it('returns empty array when domains is empty', () => {
    expect(toDomains(makeService(), emptyResult())).toEqual([]);
  });

  it('builds Domain from CraftDomainEntry with bounded contexts', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        {
          name: 'Commerce', uri: 'file:///a.craft', startLine: 1, endLine: 5,
          inCurrentFile: false,
          boundedContexts: [
            { name: 'Orders', startLine: 2 },
            { name: 'Payments', startLine: 3 },
          ],
        },
      ],
    };

    const domains = toDomains(makeService(), result);
    expect(domains).toHaveLength(1);
    expect(domains[0].name).toBe('Commerce');
    expect(domains[0].boundedContexts.map((bc: { name: string }) => bc.name)).toEqual(
      expect.arrayContaining(['Orders', 'Payments'])
    );
  });

  it('sorts domains alphabetically with Unknown last', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        { name: 'Unknown', uri: 'file:///a.craft', startLine: 1, endLine: 3, inCurrentFile: false, boundedContexts: [] },
        { name: 'Billing', uri: 'file:///a.craft', startLine: 4, endLine: 6, inCurrentFile: false, boundedContexts: [] },
        { name: 'Auth',    uri: 'file:///a.craft', startLine: 7, endLine: 9, inCurrentFile: false, boundedContexts: [] },
      ],
    };

    const domains = toDomains(makeService(), result);
    expect(domains.map((d: { name: string }) => d.name)).toEqual(['Auth', 'Billing', 'Unknown']);
  });

  it('sets inCurrentFile from domain entry and propagates to BCs', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        {
          name: 'Core', uri: 'file:///a.craft', startLine: 1, endLine: 5, inCurrentFile: true,
          boundedContexts: [{ name: 'Alpha', startLine: 2 }],
        },
        {
          name: 'Edge', uri: 'file:///b.craft', startLine: 1, endLine: 3, inCurrentFile: false,
          boundedContexts: [{ name: 'Beta', startLine: 2 }],
        },
      ],
    };

    const domains = toDomains(makeService(), result);
    const core = domains.find((d: { name: string }) => d.name === 'Core');
    const edge = domains.find((d: { name: string }) => d.name === 'Edge');

    expect(core.inCurrentFile).toBe(true);
    expect(core.boundedContexts[0].inCurrentFile).toBe(true);
    expect(edge.inCurrentFile).toBe(false);
    expect(edge.boundedContexts[0].inCurrentFile).toBe(false);
  });

  it('does not have inCurrentFile collision across domains with same BC name', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        {
          name: 'DomainA', uri: 'file:///current.craft', startLine: 1, endLine: 5, inCurrentFile: true,
          boundedContexts: [{ name: 'Shared', startLine: 2 }],
        },
        {
          name: 'DomainB', uri: 'file:///other.craft', startLine: 1, endLine: 5, inCurrentFile: false,
          boundedContexts: [{ name: 'Shared', startLine: 2 }],
        },
      ],
    };

    const domains = toDomains(makeService(), result);
    const domainA = domains.find((d: { name: string }) => d.name === 'DomainA');
    const domainB = domains.find((d: { name: string }) => d.name === 'DomainB');

    expect(domainA.boundedContexts[0].inCurrentFile).toBe(true);
    expect(domainB.boundedContexts[0].inCurrentFile).toBe(false);
  });
});

describe('DslExtractService.buildServiceGroups', () => {
  it('returns empty array when services is empty', () => {
    expect(toServiceGroups(makeService(), emptyResult(), [])).toEqual([]);
  });

  it('links service to domain via contexts', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        {
          name: 'Commerce', uri: 'file:///a.craft', startLine: 17, endLine: 24, inCurrentFile: false,
          boundedContexts: [
            { name: 'Orders', startLine: 18 },
            { name: 'Payments', startLine: 19 },
          ],
        },
      ],
      services: [
        { name: 'OrderSvc', uri: 'file:///a.craft', startLine: 2, endLine: 6,  inCurrentFile: false, contexts: ['Orders'] },
        { name: 'PaySvc',   uri: 'file:///a.craft', startLine: 7, endLine: 11, inCurrentFile: false, contexts: ['Payments'] },
      ],
    };
    const domains = toDomains(makeService(), result);
    const groups = toServiceGroups(makeService(), result, domains);

    expect(groups).toHaveLength(1);
    expect(groups[0].name).toBe('Commerce');
    expect(groups[0].services.map((s: { name: string }) => s.name)).toEqual(
      expect.arrayContaining(['OrderSvc', 'PaySvc'])
    );
  });

  it('populates blockRange from service entry start/endLine', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        {
          name: 'Core', uri: 'file:///a.craft', startLine: 10, endLine: 14, inCurrentFile: false,
          boundedContexts: [{ name: 'Alpha', startLine: 11 }],
        },
      ],
      services: [
        { name: 'AlphaSvc', uri: 'file:///a.craft', startLine: 2, endLine: 8, inCurrentFile: false, contexts: ['Alpha'] },
      ],
    };
    const domains = toDomains(makeService(), result);
    const groups = toServiceGroups(makeService(), result, domains);

    expect(groups[0].services[0].blockRange).toEqual({
      fileUri: 'file:///a.craft', startLine: 2, endLine: 8,
    });
  });

  it('marks service inCurrentFile from server-provided flag', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        {
          name: 'Core', uri: 'file:///a.craft', startLine: 10, endLine: 14, inCurrentFile: true,
          boundedContexts: [{ name: 'Alpha', startLine: 11 }],
        },
      ],
      services: [
        { name: 'SvcA', uri: 'file:///a.craft', startLine: 2, endLine: 5, inCurrentFile: true,  contexts: ['Alpha'] },
        { name: 'SvcB', uri: 'file:///b.craft', startLine: 2, endLine: 5, inCurrentFile: false, contexts: ['Alpha'] },
      ],
    };
    const domains = toDomains(makeService(), result);
    const groups = toServiceGroups(makeService(), result, domains);
    const core = groups.find((g: { name: string }) => g.name === 'Core');

    expect(core.services.find((s: { name: string }) => s.name === 'SvcA').inCurrentFile).toBe(true);
    expect(core.services.find((s: { name: string }) => s.name === 'SvcB').inCurrentFile).toBe(false);
  });
});
