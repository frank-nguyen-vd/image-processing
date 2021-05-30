import { promises as fs } from 'fs';
import * as fsx from 'fs';

export async function listFilesInDir(path: string): Promise<string[]> {
    return fs.readdir(path);
}

export function existsFile(filePath: string): boolean {
    return fsx.existsSync(filePath);
}

export function splitNameAndExt(filename: string): Array<string> {
    const parts = filename.split('.');
    const ext = parts.pop() as string;
    const name = parts.join('.');

    return [name, ext];
}

export function findImagesByName(
    images: string[],
    imageName: string
): string[] {
    return images.filter((image) => {
        const [name, ext] = splitNameAndExt(image);
        return name === imageName;
    });
}

export function findOneImageByName(
    images: string[],
    imageName: string
): string {
    const result = findImagesByName(images, imageName);
    if (result.length === 0) return '';
    return result[0];
}
