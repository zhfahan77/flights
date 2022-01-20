import 'dotenv/config';

import axios from 'axios';

import { FlightDetails, FlightDetailSource } from '../core/types';

let cachedSource1Data: FlightDetailSource;
let cachedSource2Data: FlightDetailSource;

const fallbackResponse: FlightDetailSource = {
  flights: []
};

export const getSource1Data = async (): Promise<FlightDetailSource> => {
  const url = `https://discovery-stub.comtravo.com/source1`;
  try {
    if (cachedSource1Data) {
      return cachedSource1Data;
    };
    const response = await axios.get(url, {
      auth: {
        username: process.env.DISCOVERY_SERVICE_USERNAME || '',
        password: process.env.DISCOVERY_SERVICE_PASSWORD || ''
      },
      timeout: Number(process.env.DISCOVERY_SERVICE_TIMEOUT)
    });
    cachedSource1Data = response.data;
    return response.data;
  } catch (error) {
    console.warn(`Something went wrong while getting data from ${url}`);
    return fallbackResponse;
  }

};

export const getSource2Data = async (): Promise<FlightDetailSource> => {
  const url = `https://discovery-stub.comtravo.com/source2`;
  try {
    if (cachedSource2Data) {
      return cachedSource2Data;
    };
    const response = await axios.get(url, {
      auth: {
        username: process.env.DISCOVERY_SERVICE_USERNAME || '',
        password: process.env.DISCOVERY_SERVICE_PASSWORD || ''
      },
      timeout: Number(process.env.DISCOVERY_SERVICE_TIMEOUT)
    });
    cachedSource2Data = response.data;
    return response.data;
  } catch (error) {
    console.warn(`Something went wrong while getting data from ${url}`);
    return fallbackResponse;
  }
};

export const getFlightDetailsFromSources = async (): Promise<FlightDetails> => {
  const source1 = await getSource1Data();
  const source2 = await getSource2Data();

  return { source1, source2 };
};