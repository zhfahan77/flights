import { Request, Response } from 'express';

export const getFlights = (req: Request, res: Response) => {
    return res.status(200).json({ message: 'OK' });
};