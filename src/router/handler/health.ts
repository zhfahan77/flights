import { Request, Response } from 'express';

export const checkHealth = (req: Request, res: Response) => {
    return res.status(200).json({ health: 'OK' });
};