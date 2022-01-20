import { Application } from 'express';

import { flightsRouter } from './flights';
import { healthCheckRouter } from './health';

export const initializeRoutes = (app: Application) => {
    app.use('/api/flights', flightsRouter)
    app.use('/api/health', healthCheckRouter)
};
