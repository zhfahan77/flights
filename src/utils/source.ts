
import 'dotenv/config';

import { httpClient } from './http';
import { FlightDetailSource } from '../core/flights/types';

const fallbackResponse: FlightDetailSource = {
    flights: []
};

export const getSource1Data = async (): Promise<FlightDetailSource> => {
    const url = `https://discovery-stub.comtravo.com/source1`;
    try {
        const response = await httpClient.get(url, {
            auth: {
                username: process.env.DISCOVERY_SERVICE_USERNAME || '',
                password: process.env.DISCOVERY_SERVICE_PASSWORD || ''
            },
            timeout: Number(process.env.DISCOVERY_SERVICE_TIMEOUT)
        });
        return response.data;
    } catch (error) {
        console.log(`Something went wrong while getting data from ${url}`);
        return fallbackResponse;
    }

};

export const getSource2Data = async (): Promise<FlightDetailSource> => {
    const url = `https://discovery-stub.comtravo.com/source2`;
    try {
        const response = await httpClient.get(url, {
            auth: {
                username: process.env.DISCOVERY_SERVICE_USERNAME || '',
                password: process.env.DISCOVERY_SERVICE_PASSWORD || ''
            },
            timeout: Number(process.env.DISCOVERY_SERVICE_TIMEOUT)
        });
        return response.data;
    } catch (error) {
        console.log(`Something went wrong while getting data from ${url}`);
        return fallbackResponse;
    }
};
