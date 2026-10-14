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

// craft v2.24.0: event lists, notifies one of, returns stream, the bracket
// markers and the three new actor kinds.
describe('listens lists and notifies one of', () => {
    const list = rule('event-list');
    const begin = re(list.begin);
    // 'm': in Oniguruma `$` also matches before the line's trailing newline.
    const end = new RegExp(list.end ?? '', 'gm');

    // Index just past the first end match at or after `from`, or -1.
    const endAt = (line: string, from = 0): number => {
        end.lastIndex = from;
        const m = end.exec(line);
        return m ? m.index : -1;
    };

    test('opens on listens and on notifies one of', () => {
        expect(begin.exec('    when seshat listens sns.a, sns.b')?.[1]).toBe('listens');
        const m = begin.exec('        nmf notifies one of nmfbus.A, nmfbus.B');
        expect(m?.[2]).toBe('notifies');
        expect(m?.[3]).toBe('one');
        expect(m?.[4]).toBe('of');
    });

    test('notifies one alone is an event named one', () => {
        expect(begin.exec('        x notifies one')).toBeNull();
        expect(begin.exec('        x notifies one of.Ended')).toBeNull();
    });

    test('a line that ends in a comma continues the list', () => {
        const line = '    when seshat listens sns.a, sns.b,\n';
        expect(endAt(line, line.indexOf('listens') + 7)).toBe(-1);
    });

    test('a comment line between continuation lines does not end the list', () => {
        // The block's own comment pattern swallows the newline, so the end
        // rule never sees the comment's last character.
        const comment = (list.patterns ?? []).find(p => p.match?.includes('//'));
        const line = '            // the remaining topics\n';
        const m = re(comment?.match).exec(line);
        expect(m?.index).toBe(12);
        expect(m?.[0].endsWith('\n')).toBe(true);
        expect(endAt(line)).toBeGreaterThan(12);
        expect(endAt(line.slice(0, 12))).toBe(-1);
    });

    test('the list ends after its last item', () => {
        const line = '            sns.c, sns.d\n';
        expect(endAt(line)).toBe(line.indexOf('sns.d') + 5);
        const trailing = '            sns.c, sns.d  // last\n';
        expect(endAt(trailing)).toBe(trailing.indexOf('sns.d') + 5);
    });

    test('items get the event scopes', () => {
        const item = (list.patterns ?? []).find(p => p.match?.includes('(\\.)'));
        const m = re(item?.match).exec('sns.mercury-cooked');
        expect(m?.[1]).toBe('sns');
        expect(m?.[3]).toBe('mercury-cooked');
    });

    test('is listed before the single event rule', () => {
        expect(topLevel.indexOf('#event-list')).toBeGreaterThanOrEqual(0);
        expect(topLevel.indexOf('#event-list')).toBeLessThan(topLevel.indexOf('#event-ref'));
    });
});

describe('returns stream', () => {
    const stream = re(rule('returns-stream').match);

    test.each([
        '        AiAssistant returns stream the reply as META, TOKEN and DONE events',
        '        graphql returns stream to x each event',
        '        graphql returns stream',
    ])('%s', line => {
        const m = stream.exec(line);
        expect(m?.[1]).toBe('returns');
        expect(m?.[2]).toBe('stream');
    });

    test('stream elsewhere is a word', () => {
        expect(stream.exec('        x asks y for one stream of data')).toBeNull();
        expect(stream.exec('        x returns stream.events')).toBeNull();
        expect(stream.exec('        x returns streams')).toBeNull();
    });

    test('is listed before the action verbs', () => {
        expect(topLevel.indexOf('#returns-stream')).toBeGreaterThanOrEqual(0);
        expect(topLevel.indexOf('#returns-stream')).toBeLessThan(topLevel.indexOf('#action-verbs'));
    });
});

describe('operation brackets: inferred, ADDR, SQL', () => {
    const op = re(rule('operation-annotation').match);

    test('inferred before a verb', () => {
        const m = op.exec('        a asks b to init  [inferred POST /api/v1/x]');
        expect(m?.[2]).toBe('inferred');
        expect(m?.[3]).toBe('POST');
        expect(m?.[4]).toBe(' /api/v1/x');
    });

    test('inferred alone', () => {
        const m = op.exec('        a asks b to init  [inferred]');
        expect(m?.[2]).toBe('inferred');
        expect(m?.[3]).toBeUndefined();
    });

    test.each([
        ['[SQL investment flat]', 'SQL', ' investment flat'],
        ['[ADDR "https://a.b/c"]', 'ADDR', ' "https://a.b/c"'],
        ['[GET /p/{lat},{lon}]', 'GET', ' /p/{lat},{lon}'],
    ])('%s', (bracket, verb, payload) => {
        const m = op.exec(`        a asks b for it  ${bracket}`);
        expect(m?.[3]).toBe(verb);
        expect(m?.[4]).toBe(payload);
    });

    test('an operation list is one payload', () => {
        const m = op.exec('        a asks b to save  [postAdvert, putAdvert]');
        expect(m?.[2]).toBeUndefined();
        expect(m?.[4]).toBe('postAdvert, putAdvert');
    });

    test('inferred as a payload prefix is not the marker', () => {
        expect(op.exec('        a asks b  [inferredOp]')?.[2]).toBeUndefined();
    });
});

describe('actor kinds', () => {
    test('actor declarations take the six kinds', () => {
        const decl = re(rule('actor-declaration').match);
        for (const kind of ['user', 'system', 'service', 'scheduler', 'tool', 'infra']) {
            expect(decl.exec(`actor ${kind} Ticker`)?.[2]).toBe(kind);
        }
    });

    test('an actors block colours the kinds only inside it', () => {
        const block = rule('actors-block');
        expect(re(block.begin).exec('actors {')?.[1]).toBe('actors');
        expect(re(block.end).exec('}')).not.toBeNull();
        const kind = (block.patterns ?? []).find(p => p.match?.includes('scheduler'));
        for (const [line, word] of [['    scheduler Ticker', 'scheduler'], ['    tool OperatorTool', 'tool'], ['    infra Platform', 'infra'], ['    user Seller', 'user']]) {
            expect(re(kind?.match).exec(line)?.[1]).toBe(word);
        }
        expect(topLevel.indexOf('#actors-block')).toBeLessThan(topLevel.indexOf('#block-keywords'));
    });

    test('tool, infra and scheduler outside the block are words', () => {
        const global = re(rule('actor-types').match);
        expect(global.exec('        x asks the tool to run on infra')).toBeNull();
    });
});
