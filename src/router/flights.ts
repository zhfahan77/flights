import express from 'express';

import { getFlights } from './handler/flights';

export const flightsRouter = express.Router();

flightsRouter.get('/', getFlights);