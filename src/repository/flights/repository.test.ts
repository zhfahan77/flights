import * as source from '../../utils/source';
import { getFlightDetailsFromSources } from './flights';

jest.mock('../../utils/source', () => {
  const original = jest.requireActual('../../utils/source');
  return {
    __esModule: true,
    ...original,
    getSource1Data: () => Promise.resolve({ flights: [] }),
    getSource2Data: () => Promise.resolve({ flights: [] })
  }
});

describe('Repository: getFlightDetailsFromSources', () => {
  it('it should call getSource1Data and getSource2Data method to fetch the data', async () => {
    const spy1 = jest.spyOn(source, 'getSource1Data');
    const spy2 = jest.spyOn(source, 'getSource2Data');
    await getFlightDetailsFromSources();
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });
});