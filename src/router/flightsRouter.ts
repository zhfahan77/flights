import express from 'express';

export const flightsRouter = express.Router();

flightsRouter.get('/', (req, res) => {
    return res.status(200).json({ message: 'Express + TypeScript Server' })
});