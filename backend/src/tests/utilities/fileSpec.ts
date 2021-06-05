import * as file from '../../utilities/file';

describe('Helper functions to work with files', () => {
    describe('Function splitNameAndExt()', () => {
        it('can separate "hello.world.txt" to name part "hello.world" and extension "txt"', () => {
            const [name, ext] = file.splitNameAndExt('hello.world.txt');
            expect(name).toBe('hello.world');
            expect(ext).toBe('txt');
        });
        it('can separate "hello-world.py" to name part "hello-world" and extension "py"', () => {
            const [name, ext] = file.splitNameAndExt('hello-world.py');
            expect(name).toBe('hello-world');
            expect(ext).toBe('py');
        });
        it('can separate "" to name part "" and extension ""', () => {
            const [name, ext] = file.splitNameAndExt('');
            expect(name).toBe('');
            expect(ext).toBe('');
        });
    });

    describe('Function findOneImageByName()', () => {
        const samples = [
            'morning.jpg',
            'morning.txt',
            'noon.png',
            'afternoon.bmp'
        ];

        it(`returns "morning.jpg" if search "morning" in [${samples}]`, () => {
            const foundImage = file.findOneImageByName(samples, 'morning');
            expect(foundImage.includes('morning')).toBeTrue();
        });

        it(`returns "" if search "twilight" in [${samples}]`, () => {
            const foundImage = file.findOneImageByName(samples, 'twilight');
            expect(foundImage.includes('twilight')).toBeFalse();
        });
    });

    describe('Function findImagesByName()', () => {
        const samples = [
            'morning.jpg',
            'morning.txt',
            'noon.png',
            'afternoon.bmp'
        ];
        it(`return [morning.jpg, morning.txt] if search "morning" in [${samples}]`, () => {
            const foundImages = file.findImagesByName(samples, 'morning');
            expect(foundImages).toEqual(['morning.jpg', 'morning.txt']);
        });
        it(`return [] if search "twilight" in [${samples}]`, () => {
            const foundImages = file.findImagesByName(samples, 'twilight');
            expect(foundImages).toEqual([]);
        });
    });
});
