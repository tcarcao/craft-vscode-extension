// Checks the TextMate rules for the craft v2.21–v2.23 use-case and surface
// constructs. TextMate scopes are the base layer the editor paints before the
// language server's semantic tokens arrive (and whenever semantic highlighting
// is off), so the contextual keywords must colour only where craft treats them
// as keywords: `and asks loop to run` is an ordinary action line.
import * as fs from 'fs';
import * as path from 'path';

interface Rule { match?: string; begin?: string; end?: string; patterns?: Rule[]; include?: string }

const grammar = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'syntaxes', 'craft.tmLanguage.json'), 'utf8'),
) as { patterns: Rule[]; repository: Record<string, Rule> };

const rule = (name: string): Rule => {
    const r = grammar.repository[name];
    if (!r) {
        throw new Error(`missing repository rule ${name}`);
    }
    return r;
};

const re = (source: string | undefined): RegExp => {
    if (!source) {
        throw new Error('rule has no regex');
    }
    return new RegExp(source);
};

const topLevel = grammar.patterns.map(p => p.include);

describe('block keywords (par/and/loop, alt/opt/else, scenario, note/finding)', () => {
    const kw = re(rule('step-keyword').match);

    test.each([
        ['        par "field resolvers"', 'par'],
        ['        and "the statistics"', 'and'],
        ['        loop "for each image"', 'loop'],
        ['        loop', 'loop'],
        ['        alt "valid"', 'alt'],
        ['        else', 'else'],
        ['    scenario "happy path"', 'scenario'],
        ['    finding "nothing retries a failed callback"', 'finding'],
        ['        note "the gateway forwards the session"  // why', 'note'],
    ])('%s is a keyword', (line, word) => {
        expect(kw.exec(line)?.[1]).toBe(word);
    });

    test.each([
        '        and asks loop to run',
        '        note records it',
        '        loop records the par',
        '        billing charges the card and notifies the seller',
    ])('%s is an ordinary action line', line => {
        expect(kw.exec(line)).toBeNull();
    });

    test('is listed before the action rules', () => {
        expect(topLevel.indexOf('#step-keyword')).toBeGreaterThanOrEqual(0);
        expect(topLevel.indexOf('#step-keyword')).toBeLessThan(topLevel.indexOf('#action-verbs'));
    });
});

describe('when <ctx> receives', () => {
    const recv = re(rule('receive-trigger').match);

    test('colours when and receives', () => {
        const m = recv.exec('    when graphql receives a reindex sweep  [reindexAdverts]');
        expect(m?.[1]).toBe('when');
        expect(m?.[3]).toBe('receives');
        expect(recv.exec('    when ad/graphql receives')?.[3]).toBe('receives');
    });

    test('ignores receives anywhere else', () => {
        expect(recv.exec('    when Seller opens the receives page')).toBeNull();
        expect(recv.exec('        billing receives the payment')).toBeNull();
    });

    test('wins the tie with the plain when rule', () => {
        expect(topLevel.indexOf('#receive-trigger')).toBeLessThan(topLevel.indexOf('#flow-keyword'));
    });
});

describe('schedules', () => {
    const tail = re(rule('schedule-keyword').match);

    test.each([
        ['    when smsdispatch listens store.sms_queue.inserted cron "* 10 * * 1-5"', 'cron'],
        ['    when leadimporter listens sqs.LeadRequested every "5m"', 'every'],
        ['    when cron "0 7 * * 1-5"', 'cron'],
        ['    when every "5m"', 'every'],
    ])('%s', (line, word) => {
        expect(tail.exec(line)?.[1]).toBe(word);
    });

    test('a schedule word that is not followed by a quoted text is a word', () => {
        expect(tail.exec('        Feeds polls the feed every hour')).toBeNull();
    });
});

describe('surface blocks', () => {
    const surface = rule('surface-block');

    test('opens on a top-level surface line and closes on }', () => {
        const begin = re(surface.begin).exec('surface concierge {');
        expect(begin?.[1]).toBe('surface');
        expect(begin?.[2]).toBe('concierge');
        expect(re(surface.begin).exec('surface re/obido {')?.[2]).toBe('re/obido');
        expect(re(surface.begin).exec('        surface asks billing to pay')).toBeNull();
        expect(re(surface.end).exec('}')).not.toBeNull();
    });

    const inner = (line: string): string | undefined => {
        for (const p of surface.patterns ?? []) {
            const m = p.match ? new RegExp(p.match).exec(line) : null;
            if (m && m[1]) {
                return m[1];
            }
        }
        return undefined;
    };

    test.each([
        ['    callers: Advisor, unknown', 'callers'],
        ['    spec: "obidozoe/docs/openapi.yaml"', 'spec'],
        ['    query the seeker list  [getUserList]', 'query'],
        ['    command delete a seeker\'s account  [deleteAccount]', 'command'],
        ['    note "read-only replica"', 'note'],
        ['    finding "the totals route has no authentication"', 'finding'],
    ])('%s', (line, word) => {
        expect(inner(line)).toBe(word);
    });

    test('is listed before the block keywords', () => {
        expect(topLevel.indexOf('#surface-block')).toBeGreaterThanOrEqual(0);
        expect(topLevel.indexOf('#surface-block')).toBeLessThan(topLevel.indexOf('#block-keywords'));
    });
});
