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

export function findImageByName(images: string[], imageName: string): string {
    for (let i = 0; i < images.length; i++) {
        const [name, ext] = splitNameAndExt(images[i]);
        if (name === imageName) {
            return images[i];
        }
    }
    return '';
}
