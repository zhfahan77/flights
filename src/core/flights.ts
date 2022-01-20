import { FlightDetails, FlightDetailSource } from './types';

export const _mergeFlights = (source1: FlightDetailSource, source2: FlightDetailSource): FlightDetailSource => {
    const merged = source1.flights.concat(source2.flights);
    return {
        flights: merged
    }
};

export const _removeDuplicateFlights = (data: FlightDetailSource): FlightDetailSource => {
    return data
};

export const getFlights = async (repository: Record<string, Function>): Promise<FlightDetailSource> => {
    const { getFlightDetailsFromSources } = repository;

    const { source1, source2 }: FlightDetails = await getFlightDetailsFromSources();
    const mergedResponse: FlightDetailSource = _mergeFlights(source1, source2);
    const uniqueResponse: FlightDetailSource = _removeDuplicateFlights(mergedResponse);

    return uniqueResponse;
};