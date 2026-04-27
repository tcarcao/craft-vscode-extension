import { DslExtractService } from './dslExtractService.js';
import { CraftExtractionResult } from '../../../shared/lib/types/domain-extraction.js';
import { Domain } from '../types/domain.js';
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

function applyUseCases(svc: DslExtractService, result: CraftExtractionResult, domains: Domain[]): Domain[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (svc as any).buildUseCasesIntoDomains(result, domains);
  return domains;
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

describe('DslExtractService.buildUseCasesIntoDomains', () => {
  it('does nothing when useCases is empty', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        { name: 'Commerce', uri: 'file:///a.craft', startLine: 1, endLine: 5, inCurrentFile: false,
          boundedContexts: [{ name: 'Orders', startLine: 2 }] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    expect(domains).toHaveLength(1);
    expect(domains[0].boundedContexts[0].useCases).toHaveLength(0);
  });

  it('routes use case to the BC matching its entryPointContext', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        { name: 'Commerce', uri: 'file:///a.craft', startLine: 1, endLine: 5, inCurrentFile: false,
          boundedContexts: [{ name: 'Orders', startLine: 2 }] },
      ],
      useCases: [
        { name: 'Place Order', uri: 'file:///a.craft', startLine: 7, endLine: 12,
          inCurrentFile: false, entryPointContext: 'Orders', involvedContexts: ['Orders'] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const orderBC = domains[0].boundedContexts.find((bc: { name: string }) => bc.name === 'Orders');
    expect(orderBC.useCases).toHaveLength(1);
    expect(orderBC.useCases[0].name).toBe('Place Order');
  });

  it('falls back to Unknown BC when entryPointContext is empty', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      useCases: [
        { name: 'Orphan Case', uri: 'file:///a.craft', startLine: 1, endLine: 5,
          inCurrentFile: false, entryPointContext: '', involvedContexts: [] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const unknown = domains.find((d: { name: string }) => d.name === 'Unknown');
    expect(unknown).toBeDefined();
    const unknownBC = unknown.boundedContexts.find((bc: { name: string }) => bc.name === 'Unknown');
    expect(unknownBC.useCases).toHaveLength(1);
    expect(unknownBC.useCases[0].name).toBe('Orphan Case');
  });

  it('places use case under a named context within Unknown domain when entryPointContext has no domain declaration', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      useCases: [
        { name: 'Lost Case', uri: 'file:///a.craft', startLine: 1, endLine: 5,
          inCurrentFile: false, entryPointContext: 'NonExistentContext', involvedContexts: [] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const unknown = domains.find((d: { name: string }) => d.name === 'Unknown');
    expect(unknown).toBeDefined();
    const namedBC = unknown.boundedContexts.find((bc: { name: string }) => bc.name === 'NonExistentContext');
    expect(namedBC).toBeDefined();
    expect(namedBC.useCases[0].name).toBe('Lost Case');
  });

  it('groups distinct undeclared contexts as separate BCs under the Unknown domain', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      useCases: [
        { name: 'UC A', uri: 'file:///a.craft', startLine: 1, endLine: 3,
          inCurrentFile: false, entryPointContext: 'CtxAlpha', involvedContexts: [] },
        { name: 'UC B', uri: 'file:///a.craft', startLine: 4, endLine: 6,
          inCurrentFile: false, entryPointContext: 'CtxBeta', involvedContexts: [] },
        { name: 'UC C', uri: 'file:///a.craft', startLine: 7, endLine: 9,
          inCurrentFile: false, entryPointContext: 'CtxAlpha', involvedContexts: [] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const unknown = domains.find((d: { name: string }) => d.name === 'Unknown');
    expect(unknown).toBeDefined();
    expect(unknown.boundedContexts).toHaveLength(2);
    const alpha = unknown.boundedContexts.find((bc: { name: string }) => bc.name === 'CtxAlpha');
    const beta = unknown.boundedContexts.find((bc: { name: string }) => bc.name === 'CtxBeta');
    expect(alpha.useCases).toHaveLength(2);
    expect(beta.useCases).toHaveLength(1);
  });

  it('stores inCurrentFile on the UseCase object', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        { name: 'Core', uri: 'file:///a.craft', startLine: 1, endLine: 5, inCurrentFile: false,
          boundedContexts: [{ name: 'Auth', startLine: 2 }] },
      ],
      useCases: [
        { name: 'Login', uri: 'file:///a.craft', startLine: 7, endLine: 10,
          inCurrentFile: true, entryPointContext: 'Auth', involvedContexts: [] },
        { name: 'Logout', uri: 'file:///b.craft', startLine: 1, endLine: 4,
          inCurrentFile: false, entryPointContext: 'Auth', involvedContexts: [] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const authBC = domains[0].boundedContexts.find((bc: { name: string }) => bc.name === 'Auth');
    const login = authBC.useCases.find((uc: { name: string }) => uc.name === 'Login');
    const logout = authBC.useCases.find((uc: { name: string }) => uc.name === 'Logout');
    expect(login.inCurrentFile).toBe(true);
    expect(logout.inCurrentFile).toBe(false);
  });

  it('creates referencedIn for involved contexts without a domain declaration', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        { name: 'Commerce', uri: 'file:///a.craft', startLine: 1, endLine: 5, inCurrentFile: false,
          boundedContexts: [{ name: 'Orders', startLine: 2 }] },
      ],
      useCases: [
        { name: 'Checkout', uri: 'file:///a.craft', startLine: 7, endLine: 12, inCurrentFile: false,
          entryPointContext: 'Orders', involvedContexts: ['Orders', 'UndeclaredCtx'] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const unknown = domains.find((d: { name: string }) => d.name === 'Unknown');
    expect(unknown).toBeDefined();
    const undeclaredBC = unknown.boundedContexts.find((bc: { name: string }) => bc.name === 'UndeclaredCtx');
    expect(undeclaredBC).toBeDefined();
    expect(undeclaredBC.referencedIn).toHaveLength(1);
    expect(undeclaredBC.referencedIn[0].useCaseName).toBe('Checkout');
  });

  it('creates Unknown domain and BC on demand — not added when unused', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        { name: 'Commerce', uri: 'file:///a.craft', startLine: 1, endLine: 5, inCurrentFile: false,
          boundedContexts: [{ name: 'Orders', startLine: 2 }] },
      ],
      useCases: [
        { name: 'Place Order', uri: 'file:///a.craft', startLine: 7, endLine: 12,
          inCurrentFile: false, entryPointContext: 'Orders', involvedContexts: [] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const unknown = domains.find((d: { name: string }) => d.name === 'Unknown');
    expect(unknown).toBeUndefined();
  });

  it('propagates inCurrentFile from use case to its BC and domain', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        { name: 'Core', uri: 'file:///a.craft', startLine: 1, endLine: 5, inCurrentFile: false,
          boundedContexts: [{ name: 'Auth', startLine: 2 }] },
      ],
      useCases: [
        { name: 'Login', uri: 'file:///a.craft', startLine: 7, endLine: 10,
          inCurrentFile: true, entryPointContext: 'Auth', involvedContexts: [] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const core = domains.find((d: { name: string }) => d.name === 'Core');
    const authBC = core.boundedContexts.find((bc: { name: string }) => bc.name === 'Auth');
    expect(authBC.inCurrentFile).toBe(true);
    expect(core.inCurrentFile).toBe(true);
  });

  it('updates totalUseCases and selectedUseCases counts on BC and domain', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        { name: 'Commerce', uri: 'file:///a.craft', startLine: 1, endLine: 5, inCurrentFile: false,
          boundedContexts: [{ name: 'Orders', startLine: 2 }] },
      ],
      useCases: [
        { name: 'UC1', uri: 'file:///a.craft', startLine: 6, endLine: 8, inCurrentFile: false,
          entryPointContext: 'Orders', involvedContexts: [] },
        { name: 'UC2', uri: 'file:///a.craft', startLine: 9, endLine: 11, inCurrentFile: false,
          entryPointContext: 'Orders', involvedContexts: [] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const commerce = domains.find((d: { name: string }) => d.name === 'Commerce');
    const ordersBC = commerce.boundedContexts.find((bc: { name: string }) => bc.name === 'Orders');
    expect(ordersBC.totalUseCases).toBe(2);
    expect(ordersBC.selectedUseCases).toBe(2);
    expect(commerce.totalUseCases).toBe(2);
    expect(commerce.selectedUseCases).toBe(2);
  });

  it('populates referencedIn on BCs listed in involvedContexts', () => {
    const result: CraftExtractionResult = {
      ...emptyResult(),
      domains: [
        { name: 'Commerce', uri: 'file:///a.craft', startLine: 1, endLine: 10, inCurrentFile: false,
          boundedContexts: [
            { name: 'Orders', startLine: 2 },
            { name: 'Payments', startLine: 4 },
          ],
        },
      ],
      useCases: [
        { name: 'Checkout', uri: 'file:///a.craft', startLine: 12, endLine: 18, inCurrentFile: false,
          entryPointContext: 'Orders', involvedContexts: ['Orders', 'Payments'] },
      ],
    };
    const svc = makeService();
    const domains = toDomains(svc, result);
    applyUseCases(svc, result, domains);

    const commerce = domains.find((d: { name: string }) => d.name === 'Commerce');
    const ordersBC = commerce.boundedContexts.find((bc: { name: string }) => bc.name === 'Orders');
    const paymentsBC = commerce.boundedContexts.find((bc: { name: string }) => bc.name === 'Payments');

    // Entry-point BC owns the use case
    expect(ordersBC.useCases).toHaveLength(1);
    expect(ordersBC.referencedIn).toHaveLength(0);

    // Involved-but-not-entry BC gets a referencedIn entry
    expect(paymentsBC.useCases).toHaveLength(0);
    expect(paymentsBC.referencedIn).toHaveLength(1);
    expect(paymentsBC.referencedIn[0].useCaseName).toBe('Checkout');
    expect(paymentsBC.referencedIn[0].role).toBe('involved');
  });
});
