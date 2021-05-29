import express from 'express';
import log4js from 'log4js';

const log = log4js.getLogger('/products');

const productsController = express.Router();
productsController.get('/', (req, res) => {
    log.debug('/products is called');
    return res.send({
        success: true
    });
});

export default productsController;
