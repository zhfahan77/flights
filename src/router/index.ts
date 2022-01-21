import { Application } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

import { flightsRouter } from './flights';
import { healthCheckRouter } from './health';

const swaggerPassedOptions = {
    swaggerOptions: {
        filter: true,
    },
};

const swaggerFilePath = path.join(__dirname, '../../swagger.yml');
const swaggerDocument = YAML.load(swaggerFilePath);

export const initializeRoutes = (app: Application) => {
    app.use(
        '/api/swagger-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument, swaggerPassedOptions)
    );
    app.use('/api/flights', cors(), flightsRouter)
    app.use('/api/health', cors(), healthCheckRouter)
};
