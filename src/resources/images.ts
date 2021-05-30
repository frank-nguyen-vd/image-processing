import express from 'express';
import log4js from 'log4js';
import sharp from 'sharp';
import path from 'path';
import * as file from '../utilities/file';
import * as image from '../utilities/image';

const log = log4js.getLogger('/images');

const assetsDir = './assets';
const originalDir = assetsDir + '/original';
const scaledDir = assetsDir + '/scaled';

const imagesController = express.Router();
imagesController.get(
    '/',
    async (req: express.Request, res: express.Response) => {
        log.debug('Endpoint is called');

        // Get a list of filename in a folder
        let files;
        try {
            files = await file.listFilesInDir(originalDir);
        } catch {
            log.error("Folder 'assets' does not exist");
            // Handle scenario which folder `assets` does not exist
            return res.status(500).json({
                success: false,
                error: "Folder 'assets' does not exist"
            });
        }

        // Return the list of filename if no target filename is given
        if (typeof req.query.filename != 'string') {
            return res.status(200).json({
                success: true,
                images: files
            });
        }

        // Return only one image that matches given `filename`
        const foundImage = file.findOneImageByName(
            files,
            req.query.filename as string
        );
        const [imageName, imageExt] = file.splitNameAndExt(foundImage);

        if (foundImage === '') {
            return res.status(404).json({
                success: false,
                error: 'Image not found'
            });
        }

        // Extract height and width parameters from query
        let height: number, width: number;
        try {
            const parseParam = (param: any) => {
                if (typeof param != 'string') return 0;

                const output = parseInt(param as string);
                if (output < 0) throw new Error();
                return output;
            };

            height = parseParam(req.query.height);
            width = parseParam(req.query.width);
        } catch {
            return res.status(400).json({
                success: false,
                error: 'Image dimensions must be non-negative integers'
            });
        }

        // Resize the requested image to the given dimensions
        const scaledImage = imageName + `_${width}x${height}.` + imageExt;
        const scaledImagePath = scaledDir + '/' + scaledImage;
        const originalImagePath = originalDir + '/' + foundImage;

        try {
            await image.createScaledImage(
                originalImagePath,
                scaledImagePath,
                width,
                height
            );
        } catch {
            log.error('Error while creating the scaled image');
            return res.status(500).json({
                success: false,
                error: 'Error while creating the scaled image'
            });
        }

        var options = {
            root: path.join(process.cwd(), scaledDir)
        };
        res.sendFile(scaledImage, options, (err) => {
            if (err) log.error(`While sending file, ${err}`);
            else log.debug('Scaled image is sent');
        });
    }
);

export default imagesController;
