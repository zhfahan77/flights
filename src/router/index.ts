import { Application } from 'express';

import { flightsRouter }  from './flightsRouter';

export const initializeRoutes = (app: Application) => {
    app.use('/api/flights', flightsRouter)
};
