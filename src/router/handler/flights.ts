import { Request, Response } from 'express';

import { getFlights as getFlightsCore } from '../../core/flights/flights';
import { getFlightDetailsFromSources } from '../../repository/flights/flights';

export const getFlights = async (_req: Request, res: Response) => {
    const response = await getFlightsCore({
        getFlightDetailsFromSources
    });
    return res.status(200).json(response);
};