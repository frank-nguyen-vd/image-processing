import express from 'express';
import log4js from 'log4js';

const log = log4js.getLogger('/images');

const imagesController = express.Router();
imagesController.get('/', (req: express.Request, res: express.Response) => {
    log.debug('/images is called');
    return res.send({
        success: true
    });
});

export default imagesController;
