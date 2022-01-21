import { FlightDetails, FlightDetailSource, Flights, Slice } from './types';
import { Repository } from '../../repository/flights/types';

export const mergeFlights = (source1: FlightDetailSource, source2: FlightDetailSource): FlightDetailSource => {
    // concat is faster than spread: https://stackoverflow.com/a/57191593
    // time complexity is O(N)
    const merged = source1.flights.concat(source2.flights);
    return {
        flights: merged
    }
};

export const generateFlightsMapHashKey = (f: Slice, s: Slice | null) => {
    if (!s) {
        return `${f.departure_date_time_utc}_${f.arrival_date_time_utc}_${f.flight_number}`;
    };
    return `${f.departure_date_time_utc}_${f.arrival_date_time_utc}_${f.flight_number}_${s.departure_date_time_utc}_${s.arrival_date_time_utc}_${s.flight_number}`
};

export const removeDuplicateFlights = (data: FlightDetailSource): FlightDetailSource => {
    const flightsMap = new Map();
    // console.log('Total flights received: ', data.flights.length);

    // creating a hash map, time complexity is O(N)
    data.flights.forEach((flights: Flights) => {
        const firstSlice = flights?.slices?.[0];
        const secondSlice = flights?.slices?.[1];
        // @ts-ignore
        flightsMap.set(generateFlightsMapHashKey(firstSlice, secondSlice), flights);
    });

    // console.log("Total number of duplicates removed: ", data.flights.length - Array.from(flightsMap.values()).length);

    // Map.values() returns an iterator, Array.from() iterates it over in O(N) time complexity
    return {
        flights: Array.from(flightsMap.values())
    }
};

export const getFlights = async (repository: Repository): Promise<FlightDetailSource> => {
    const { getFlightDetailsFromSources } = repository;

    const { source1, source2 }: FlightDetails = await getFlightDetailsFromSources();
    const flightResponse: FlightDetailSource = removeDuplicateFlights(mergeFlights(source1, source2))

    return flightResponse;
};