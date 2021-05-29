import express from 'express';
import usersController from './resources/users';
import productsController from './resources/products';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import log4js from 'log4js';

export const app = express();
const port = 3000;

log4js.configure({
    appenders: {
        appLog: {
            type: 'file',
            filename: 'logs/app.log',
            pattern: '-yyyy-MM-dd',
            maxLogSize: 10485760,
            numBackups: 3,
            compress: true
        },
        errorLog: {
            type: 'file',
            filename: 'logs/error.log'
        },
        consoleLog: {
            type: 'stdout'
        },
        app: {
            type: 'logLevelFilter',
            level: 'DEBUG',
            appender: 'appLog'
        },
        error: {
            type: 'logLevelFilter',
            level: 'ERROR',
            appender: 'errorLog'
        },
        info: {
            type: 'logLevelFilter',
            level: 'TRACE',
            appender: 'consoleLog'
        }
    },
    categories: {
        default: { appenders: ['app', 'info', 'error'], level: 'TRACE' }
    }
});

const log = log4js.getLogger('');

const swaggerDoc = YAML.load('./src/swagger.yaml');
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use('/api/v1/users', usersController);
app.use('/api/v1/products', productsController);

app.listen(port, () => {
    log.debug('Application starts');
    console.log(`Listening on port ${port}!`);
});
