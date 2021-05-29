import express from 'express';
import log4js from 'log4js';
import { promises as fs } from 'fs';

const log = log4js.getLogger('/images');

const assetsDir = './assets/original';

const imagesController = express.Router();
imagesController.get('/', (req: express.Request, res: express.Response) => {
    log.debug('/images is called');

    // TODO: Handle scenario which folder `assets` does not exist
    // TODO: Return only one image that matches given `filename`
    // TODO: Resize the requested image to the given dimensions
    fs.readdir(assetsDir).then((files: string[]) => {
        if (!req.query.filename && !req.query.width && !req.query.height) {
            const images = files.map((file) => {
                return { filename: file };
            });

            return res.status(200).json({
                success: true,
                images: images
            });
        } else {
            return res.status(400).json({
                success: false
            });
        }
    });
});

export default imagesController;
