import * as source from './source';

jest.mock('./http', () => {
  const original = jest.requireActual('./http');
  return {
    __esModule: true,
    ...original,
    httpClient: {
      get: () => Promise.resolve({
        data: {
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
      })
    }
  }
});

describe('Source: get source data', () => {
  it('it should call getSource1Data method to fetch the data', async () => {
    const spy = jest.spyOn(source, 'getSource1Data');
    await source.getSource1Data();
    expect(spy).toHaveBeenCalled();
  });

  it('it should call getSource2Data method to fetch the data', async () => {
    const spy = jest.spyOn(source, 'getSource2Data');
    await source.getSource2Data();
    expect(spy).toHaveBeenCalled();
  });
});