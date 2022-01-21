export interface Slice {
    origin_name: string;
    destination_name: string;
    departure_date_time_utc: Date;
    arrival_date_time_utc: Date;
    flight_number: string;
    duration: number;
}

export interface Flights {
    slices?: Slice[],
    price?: number
}

export interface FlightDetailSource {
    flights: Flights[];
};

export interface FlightDetails {
    source1: FlightDetailSource,
    source2: FlightDetailSource
};

export interface GetFlightDetailsFromSources {
    (): Promise<FlightDetails>
}
