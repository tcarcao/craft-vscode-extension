import { useCaseNames, useCaseAt } from './craftText';

const text = [
    'use_case "A" {',          // 0
    '  when X does y',         // 1
    '}',                       // 2
    '',                        // 3
    '// use_case "X" {',       // 4
    'x = "use_case \\"S\\" {"', // 5
    'use_case "B" {',          // 6
    '  when X does z',         // 7
    '}',                       // 8
].join('\n');

describe('craftText', () => {
    it('lists use case names in order, ignoring comments and strings', () => {
        expect(useCaseNames(text)).toEqual(['A', 'B']);
    });
    it('finds the use case holding a line', () => {
        expect(useCaseAt(text, 7)).toBe('B');
        expect(useCaseAt(text, 3)).toBeUndefined();
    });
});
