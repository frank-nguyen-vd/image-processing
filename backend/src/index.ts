import express from 'express';
import imagesController from './resources/images';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import log4js from 'log4js';
import { logConfig } from './config';
import cors from 'cors';

export const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));

log4js.configure(logConfig);

const log = log4js.getLogger();

const swaggerDoc = YAML.load('./src/swagger.yaml');
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use('/api/v1/images', imagesController);

app.listen(port, () => {
    log.debug(`Listening on port ${port}!`);
});
