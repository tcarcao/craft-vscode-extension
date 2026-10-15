import { sourceRootsOption } from './config';

describe('sourceRootsOption (craft.sources.roots → initializationOptions.sourceRoots)', () => {
    test('keeps the string entries', () => {
        expect(sourceRootsOption({ '*': '/src', 're-x': '/work/re-x' })).toEqual({ '*': '/src', 're-x': '/work/re-x' });
    });

    test('drops entries that are not a non-empty string', () => {
        expect(sourceRootsOption({ '*': '/src', a: 3, b: '', c: null })).toEqual({ '*': '/src' });
    });

    test.each([[{}], [undefined], [null], ['/src'], [[1]]])('%p gives no option', raw => {
        expect(sourceRootsOption(raw)).toBeUndefined();
    });
});
