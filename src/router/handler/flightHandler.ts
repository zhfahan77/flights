import { Request, Response } from 'express';

export const getFlightsHandler = (req: Request, res: Response) => {
    return res.status(200).json({ message: 'OK' });
};