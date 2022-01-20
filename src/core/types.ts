export interface Flights {
    slices?: Record<string, any>[],
    price?: number
}

export interface FlightDetailSource {
    flights: Flights[];
};

export interface FlightDetails {
    source1: FlightDetailSource,
    source2: FlightDetailSource
};