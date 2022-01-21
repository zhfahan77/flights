import { Application } from 'express';
import cors from 'cors';

import { flightsRouter } from './flights';
import { healthCheckRouter } from './health';


export const initializeRoutes = (app: Application) => {
    app.use('/api/flights', cors(), flightsRouter)
    app.use('/api/health', cors(), healthCheckRouter)
};
