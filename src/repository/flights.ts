import { FlightDetails } from '../core/types';

const constantResponse = {
    source1: {
        "flights": [
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
                        "flight_number": "144",
                        "duration": 115
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T05:35:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T07:35:00.000Z",
                        "flight_number": "8542",
                        "duration": 120
                    }
                ],
                "price": 129
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T16:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T17:55:00.000Z",
                        "flight_number": "146",
                        "duration": 115
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                        "flight_number": "8544",
                        "duration": 120
                    }
                ],
                "price": 130.1
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
                        "flight_number": "8545",
                        "duration": 120
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
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
                        "departure_date_time_utc": "2019-08-08T08:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T10:00:00.000Z",
                        "flight_number": "8543",
                        "duration": 120
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                        "flight_number": "8544",
                        "duration": 120
                    }
                ],
                "price": 130.1
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
                        "flight_number": "8545",
                        "duration": 120
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T05:35:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T07:35:00.000Z",
                        "flight_number": "8542",
                        "duration": 120
                    }
                ],
                "price": 134.81
            }
        ]
    },
    source2: {
        "flights": [
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
                        "flight_number": "144",
                        "duration": 115
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
                        "flight_number": "145",
                        "duration": 110
                    }
                ],
                "price": 129
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
                        "flight_number": "8545",
                        "duration": 120
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                        "flight_number": "8544",
                        "duration": 120
                    }
                ],
                "price": 117.01
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
                        "flight_number": "144",
                        "duration": 115
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T05:35:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T07:35:00.000Z",
                        "flight_number": "8542",
                        "duration": 120
                    }
                ],
                "price": 129
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T16:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T17:55:00.000Z",
                        "flight_number": "146",
                        "duration": 115
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                        "flight_number": "8544",
                        "duration": 120
                    }
                ],
                "price": 130.1
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
                        "flight_number": "8545",
                        "duration": 120
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
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
                        "departure_date_time_utc": "2019-08-08T08:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T10:00:00.000Z",
                        "flight_number": "8543",
                        "duration": 120
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                        "flight_number": "8544",
                        "duration": 120
                    }
                ],
                "price": 130.1
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
                        "flight_number": "8545",
                        "duration": 120
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T05:35:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T07:35:00.000Z",
                        "flight_number": "8542",
                        "duration": 120
                    }
                ],
                "price": 134.81
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T16:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T17:55:00.000Z",
                        "flight_number": "146",
                        "duration": 115
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
                        "flight_number": "145",
                        "duration": 110
                    }
                ],
                "price": 147.9
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T08:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T10:00:00.000Z",
                        "flight_number": "8543",
                        "duration": 120
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
                        "flight_number": "145",
                        "duration": 110
                    }
                ],
                "price": 147.9
            },
            {
                "slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Luton",
                        "departure_date_time_utc": "2019-08-08T07:55:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T09:50:00.000Z",
                        "flight_number": "2102",
                        "duration": 115
                    },
                    {
                        "origin_name": "Luton",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T05:25:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T07:20:00.000Z",
                        "flight_number": "2101",
                        "duration": 115
                    }
                ],
                "price": 148.87
            }
        ]
    }
};

export const getFlightDetailsFromSources = (): FlightDetails => {
    return constantResponse;
};