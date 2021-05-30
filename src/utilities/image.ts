import * as file from './file';
import sharp from 'sharp';

export async function createScaledImage(
    originalImagePath: string,
    scaledImagePath: string,
    width: number,
    height: number
) {
    if (!file.existsFile(scaledImagePath)) {
        const _height = height == 0 ? undefined : height;
        const _width = width == 0 ? undefined : width;
        await sharp(originalImagePath)
            .resize(_width, _height)
            .toFile(scaledImagePath)
            .then((info) => {})
            .catch((err) => {
                throw new Error(err);
            });
    }
}
