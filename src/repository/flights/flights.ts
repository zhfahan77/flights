import { FlightDetails } from '../../core/flights/types';
import { getSource1Data, getSource2Data } from '../../utils/source';

export const getFlightDetailsFromSources = async (): Promise<FlightDetails> => {
  const source1 = await getSource1Data();
  const source2 = await getSource2Data();

  return { source1, source2 };
};