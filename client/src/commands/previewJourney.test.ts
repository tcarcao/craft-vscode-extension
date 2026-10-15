// Pure helpers of craft.previewJourney and the journey endpoints of the craft
// server (craft >= 2.25.0: POST /journeys, POST /preview/mermaid/journey).
jest.mock('axios', () => {
    const post = jest.fn();
    return { __esModule: true, default: { post }, post };
});

jest.mock('../utils/config', () => ({
    getCraftConfig: () => ({ serverUrl: 'http://localhost:9999', timeout: 5000 }),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const mockPost = require('axios').post as jest.Mock;

import { pickDefaultSlug, orderSlugs } from './previewJourney';
import { fetchJourneySlugs, fetchMermaidJourney } from './previewMermaidCommon';

const doc = [
    'use_case "Seller promotes an advert" {',        // 0
    '    tags {',                                     // 1
    '        journey: seller-promotes-an-advert',     // 2
    '        owner: "monetisation"',                  // 3
    '    }',                                          // 4
    '    when Seller promotes an advert',             // 5
    '        web asks api for the offers',            // 6
    '        continues "Seller pays at the checkout"',// 7
    '}',                                              // 8
    '',                                               // 9
    'use_case "Seller pays at the checkout" {',       // 10
    '    tags { journey: "checkout", owner: x }',     // 11
    '    when Seller pays at the checkout',           // 12
    '        web asks api to charge the card {id}',   // 13
    '}',                                              // 14
    '',                                               // 15
    'use_case "No journey" {',                        // 16
    '    when Seller opens the page',                 // 17
    '        // a { brace in a comment',              // 18
    '        web asks api for "a } brace"',           // 19
    '}',                                              // 20
].join('\n');

describe('pickDefaultSlug', () => {
    test.each([
        [0, 'seller-promotes-an-advert'],
        [2, 'seller-promotes-an-advert'],
        [7, 'seller-promotes-an-advert'],
        [8, 'seller-promotes-an-advert'],
        [11, 'checkout'],
        [13, 'checkout'],
    ])('line %i is in journey %s', (line, slug) => {
        expect(pickDefaultSlug(doc, line)).toBe(slug);
    });

    test.each([9, 15, 16, 19, 20])('line %i has no journey', line => {
        expect(pickDefaultSlug(doc, line)).toBeUndefined();
    });

    test('a journey key outside the tags block does not count', () => {
        const text = 'use_case "U" {\n    when Seller opens journey: x\n        a asks b\n}\n';
        expect(pickDefaultSlug(text, 1)).toBeUndefined();
    });
});

describe('orderSlugs', () => {
    test('puts the default first and keeps the rest in order', () => {
        expect(orderSlugs(['a', 'b', 'c'], 'b')).toEqual(['b', 'a', 'c']);
    });

    test('ignores a default the server does not know', () => {
        expect(orderSlugs(['a', 'b'], 'x')).toEqual(['a', 'b']);
        expect(orderSlugs(['a', 'b'], undefined)).toEqual(['a', 'b']);
    });
});

describe('journey endpoints', () => {
    beforeEach(() => mockPost.mockReset());

    const files = { 'a.craft': 'use_case "A" {}', 'b.craft': 'use_case "B" {}' };

    test('fetchJourneySlugs posts the files to /journeys', async () => {
        mockPost.mockResolvedValueOnce({ data: { success: true, slugs: ['checkout', 'promote'] } });
        expect(await fetchJourneySlugs(files)).toEqual(['checkout', 'promote']);
        expect(mockPost).toHaveBeenCalledWith('http://localhost:9999/journeys', { files }, expect.any(Object));
    });

    test('fetchJourneySlugs answers [] when the server lists none', async () => {
        mockPost.mockResolvedValueOnce({ data: { success: true } });
        expect(await fetchJourneySlugs(files)).toEqual([]);
    });

    test('fetchMermaidJourney posts the files and the slug', async () => {
        mockPost.mockResolvedValueOnce({ data: { success: true, data: 'sequenceDiagram' } });
        expect(await fetchMermaidJourney(files, 'checkout')).toBe('sequenceDiagram');
        expect(mockPost).toHaveBeenCalledWith(
            'http://localhost:9999/preview/mermaid/journey',
            { files, slug: 'checkout' },
            expect.any(Object),
        );
    });

    test('a 400 from the server surfaces its error text', async () => {
        mockPost.mockRejectedValueOnce(Object.assign(new Error('Request failed with status code 400'), {
            code: 'ERR_BAD_REQUEST',
            response: { status: 400, data: { success: false, error: 'unsupported request: no use case has journey "x"' } },
        }));
        await expect(fetchMermaidJourney(files, 'x')).rejects.toThrow('no use case has journey "x"');
    });

    test('a connection error passes through unchanged', async () => {
        const refused = Object.assign(new Error('connect ECONNREFUSED'), { code: 'ECONNREFUSED' });
        mockPost.mockRejectedValueOnce(refused);
        await expect(fetchJourneySlugs(files)).rejects.toBe(refused);
    });

    test('fetchMermaidJourney throws the server error', async () => {
        mockPost.mockResolvedValueOnce({ data: { success: false, error: 'unknown journey "x"' } });
        await expect(fetchMermaidJourney(files, 'x')).rejects.toThrow('unknown journey "x"');
    });
});
