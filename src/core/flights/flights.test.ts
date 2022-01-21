import { mergeFlights, generateFlightsMapHashKey, removeDuplicateFlights, getFlights } from './flights';
import { FlightDetailSource } from './types';
import { Repository } from '../../repository/flights/types';

describe('Merge Flights', () => {
  let source: FlightDetailSource;
  let concat: FlightDetailSource;
  beforeEach(() => {
    source = {
      "flights": [
        {
          "slices": [
            {
              "origin_name": "Schonefeld",
              "destination_name": "Stansted",
              "departure_date_time_utc": new Date("2019-08-08T20:25:00.000Z"),
              "arrival_date_time_utc": new Date("2019-08-08T22:25:00.000Z"),
              "flight_number": "8545",
              "duration": 120
            },
            {
              "origin_name": "Stansted",
              "destination_name": "Schonefeld",
              "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
              "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
              "flight_number": "145",
              "duration": 110
            }
          ],
          "price": 134.81
        }
      ]
    };
    concat = {
      ...source,
      flights: [
        ...source.flights,
        ...source.flights,
      ]
    };
  });
  it('it should merge flights and return merged data', () => {
    expect(mergeFlights(source, source) === concat);
  });

  it('it should merge flights even if fligts array is empty', () => {
    source = {
      flights: []
    }
    concat = {
      ...source,
      flights: [
        ...source.flights,
        ...source.flights,
      ]
    };
    expect(mergeFlights(source, source) === concat);
  });
});

describe('Generate FlightsMap Hash Key', () => {
  it('it should generate a hash key as string', () => {
    const f = {
      "origin_name": "Stansted",
      "destination_name": "Schonefeld",
      "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
      "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
      "flight_number": "145",
      "duration": 110
    };
    const s = {
      "origin_name": "Schonefeld",
      "destination_name": "Stansted",
      "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
      "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
      "flight_number": "100",
      "duration": 105
    };
    const hashKey = generateFlightsMapHashKey(f, s);
    expect(hashKey === `${f.departure_date_time_utc}_${f.arrival_date_time_utc}_${f.flight_number}_${s.departure_date_time_utc}_${s.arrival_date_time_utc}_${s.flight_number}`)
  });

  it('it should generate a hash key as string even if second slice is not there', () => {
    const f = {
      "origin_name": "Stansted",
      "destination_name": "Schonefeld",
      "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
      "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
      "flight_number": "145",
      "duration": 110
    };
    const s = null;
    const hashKey = generateFlightsMapHashKey(f, s);
    expect(hashKey === `${f.departure_date_time_utc}_${f.arrival_date_time_utc}_${f.flight_number}`)
  });
});

describe('Remove Duplicate Flights', () => {
  let source: FlightDetailSource;
  beforeEach(() => {
    source = {
      "flights": [
        {
          "slices": [
            {
              "origin_name": "Schonefeld",
              "destination_name": "Stansted",
              "departure_date_time_utc": new Date("2019-08-08T20:25:00.000Z"),
              "arrival_date_time_utc": new Date("2019-08-08T22:25:00.000Z"),
              "flight_number": "8545",
              "duration": 120
            },
            {
              "origin_name": "Stansted",
              "destination_name": "Schonefeld",
              "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
              "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
              "flight_number": "145",
              "duration": 110
            }
          ],
          "price": 134.81
        },
        {
          "slices": [
            {
              "origin_name": "Schonefeld",
              "destination_name": "Stansted",
              "departure_date_time_utc": new Date("2019-08-08T20:25:00.000Z"),
              "arrival_date_time_utc": new Date("2019-08-08T22:25:00.000Z"),
              "flight_number": "8545",
              "duration": 120
            },
            {
              "origin_name": "Stansted",
              "destination_name": "Schonefeld",
              "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
              "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
              "flight_number": "145",
              "duration": 110
            }
          ],
          "price": 134.81
        }
      ]
    };
  });
  it('it should remove duplicate flights', () => {
    const uniqueFlights = removeDuplicateFlights(source);
    expect(uniqueFlights.flights.length === 1);
  });

  it('it should return empty array if no flights are present', () => {
    source = {
      flights: []
    }
    const uniqueFlights = removeDuplicateFlights(source);
    expect(uniqueFlights.flights.length === 0);
  });

  it('it should also work for single fligts array', () => {
    source = {
      flights: [
        {
          "slices": [
            {
              "origin_name": "Schonefeld",
              "destination_name": "Stansted",
              "departure_date_time_utc": new Date("2019-08-08T20:25:00.000Z"),
              "arrival_date_time_utc": new Date("2019-08-08T22:25:00.000Z"),
              "flight_number": "8545",
              "duration": 120
            },
            {
              "origin_name": "Stansted",
              "destination_name": "Schonefeld",
              "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
              "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
              "flight_number": "145",
              "duration": 110
            }
          ],
          "price": 134.81
        }
      ]
    }
    const uniqueFlights = removeDuplicateFlights(source);
    expect(uniqueFlights.flights.length === 1);
  });
});

describe('Get Flights', () => {
  let repository: Repository;
  beforeEach(() => {
    repository = {
      getFlightDetailsFromSources: jest.fn().mockImplementation(() => Promise.resolve({
        source1: {
          flights: [
            {
              "slices": [
                {
                  "origin_name": "Schonefeld",
                  "destination_name": "Stansted",
                  "departure_date_time_utc": new Date("2019-08-08T20:25:00.000Z"),
                  "arrival_date_time_utc": new Date("2019-08-08T22:25:00.000Z"),
                  "flight_number": "8545",
                  "duration": 120
                },
                {
                  "origin_name": "Stansted",
                  "destination_name": "Schonefeld",
                  "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
                  "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
                  "flight_number": "145",
                  "duration": 110
                }
              ],
              "price": 134.81
            }
          ]
        },
        source2: {
          flights: [
            {
              "slices": [
                {
                  "origin_name": "Schonefeld",
                  "destination_name": "Stansted",
                  "departure_date_time_utc": new Date("2019-08-08T20:25:00.000Z"),
                  "arrival_date_time_utc": new Date("2019-08-08T22:25:00.000Z"),
                  "flight_number": "8545",
                  "duration": 120
                },
                {
                  "origin_name": "Stansted",
                  "destination_name": "Schonefeld",
                  "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
                  "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
                  "flight_number": "145",
                  "duration": 110
                }
              ],
              "price": 134.81
            }
          ]
        }
      }))
    }
  });

  it('it should return flights data', async () => {
    const response = await getFlights(repository);
    expect(response).toHaveProperty('flights');
    expect(response.flights.length).toBe(1);
  });

  it('it should return flights data if only one sources flights data is there', async () => {
    repository = {
      getFlightDetailsFromSources: jest.fn().mockImplementation(() => Promise.resolve({
        source1: {
          flights: [
            {
              "slices": [
                {
                  "origin_name": "Schonefeld",
                  "destination_name": "Stansted",
                  "departure_date_time_utc": new Date("2019-08-08T20:25:00.000Z"),
                  "arrival_date_time_utc": new Date("2019-08-08T22:25:00.000Z"),
                  "flight_number": "8545",
                  "duration": 120
                },
                {
                  "origin_name": "Stansted",
                  "destination_name": "Schonefeld",
                  "departure_date_time_utc": new Date("2019-08-10T06:50:00.000Z"),
                  "arrival_date_time_utc": new Date("2019-08-10T08:40:00.000Z"),
                  "flight_number": "145",
                  "duration": 110
                }
              ],
              "price": 134.81
            }
          ]
        },
        source2: {
          flights: []
        }
      }))
    }
    const response = await getFlights(repository);
    expect(response).toHaveProperty('flights');
    expect(response.flights.length).toBe(1);
  });

  it('it should return empty flights data if not data is there', async () => {
    repository = {
      getFlightDetailsFromSources: jest.fn().mockImplementation(() => Promise.resolve({
        source1: {
          flights: []
        },
        source2: {
          flights: []
        }
      }))
    }
    const response = await getFlights(repository);
    expect(response).toHaveProperty('flights');
    expect(response.flights.length).toBe(0);
  });
});