import express from 'express';
import log4js from 'log4js';

const log = log4js.getLogger('/users');

const usersController = express.Router();

usersController.get('/', (req, res) => {
    log.trace('Entering cheese testing');
    log.debug('Got cheese.');
    log.info('Cheese is Comté.');
    log.warn('Cheese is quite smelly.');
    log.error('Cheese is too ripe!');
    log.fatal('Cheese was breeding ground for listeria.');
});

export default usersController;
