import { _mergeFlights } from './flights';
import { FlightDetailSource } from './types';

describe('Merge Flights', () => {
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
        }
      ]
    }
  });
  it('it should merge flights and return merged data', async () => {
    const concat = {
      ...source,
      flights: [
        ...source.flights,
        ...source.flights,
      ]
    };
    expect(_mergeFlights(source, source) === concat);
  });

  it('it should merge flights even if fligts array is empty', async () => {
    source = {
      flights: []
    }
    const concat = {
      ...source,
      flights: [
        ...source.flights,
        ...source.flights,
      ]
    };
    expect(_mergeFlights(source, source) === concat);
  });
});