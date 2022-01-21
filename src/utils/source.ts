
import 'dotenv/config';

import { httpClient } from './http';
import { source } from '../config/config';
import { FlightDetailSource } from '../core/flights/types';

const fallbackResponse: FlightDetailSource = {
    flights: []
};

export const getSource1Data = async (): Promise<FlightDetailSource> => {
    const { url, auth, timeout } = source[0];
    try {
        const response = await httpClient.get(source[0].url, {
            auth: {
                username: auth.username || '',
                password: auth.password || ''
            },
            timeout: Number(timeout)
        });
        return response.data;
    } catch (error) {
        console.log(`Something went wrong while getting data from ${url}`);
        return fallbackResponse;
    }

};

export const getSource2Data = async (): Promise<FlightDetailSource> => {
    const { url, auth, timeout } = source[1];
    try {
        const response = await httpClient.get(url, {
            auth: {
                username: auth.username || '',
                password: auth.password || ''
            },
            timeout: Number(timeout)
        });
        return response.data;
    } catch (error) {
        console.log(`Something went wrong while getting data from ${url}`);
        return fallbackResponse;
    }
};
