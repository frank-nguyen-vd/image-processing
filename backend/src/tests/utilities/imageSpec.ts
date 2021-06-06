import * as image from '../../utilities/image';
import fs from 'fs';

fdescribe('Helper functions to work with images', () => {
    describe('Function createScaledImage()', () => {
        it('can create a thumbnail size 200 x 200 pixels of image "sunrise"', async () => {
            const originalImagePath = "./assets/original/sunrise.jpeg";
            const scaledImagePath = "./assets/scaled/sunrise_200x200.jpeg"
            const width = 200;
            const height = 200;
            if (fs.existsSync(scaledImagePath)) fs.unlinkSync(scaledImagePath);
            expect(await image.createScaledImage(originalImagePath, scaledImagePath, width, height)).toEqual(undefined);
            expect(fs.existsSync(scaledImagePath)).toBeTrue;
        });

        it('works as expected even if the thumbnail file exists', async () => {
            const originalImagePath = "./assets/original/sunrise.jpeg";
            const scaledImagePath = "./assets/scaled/sunrise_200x200.jpeg"
            const width = 200;
            const height = 200;
            if (!fs.existsSync(scaledImagePath)) {
                await image.createScaledImage(originalImagePath, scaledImagePath, width, height);    
            }            
            expect(await image.createScaledImage(originalImagePath, scaledImagePath, width, height)).toEqual(undefined);
        });
    });
});
