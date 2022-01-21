import { GetFlightDetailsFromSources } from '../../core/flights/types';

export interface Repository {
    getFlightDetailsFromSources: GetFlightDetailsFromSources;
}