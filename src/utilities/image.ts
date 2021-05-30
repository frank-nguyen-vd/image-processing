import * as file from './file';
import sharp from 'sharp';
import path from 'path';
export async function createScaledImage(
    originalImagePath: string,
    scaledImagePath: string,
    width: number,
    height: number
): Promise<void> {
    file.createFolderIfNotExists(path.join(scaledImagePath, '..'));
    if (!file.existsFile(scaledImagePath)) {
        const _height = height == 0 ? undefined : height;
        const _width = width == 0 ? undefined : width;
        await sharp(originalImagePath)
            .resize(_width, _height)
            .toFile(scaledImagePath)
            .catch((err) => {
                throw new Error(err);
            });
    }
}
