import express from 'express';

import { getFlightsHandler } from './handler/flightHandler';

export const flightsRouter = express.Router();

flightsRouter.get('/', getFlightsHandler);