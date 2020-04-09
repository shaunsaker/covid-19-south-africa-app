import {ApplicationState} from '../reducers';

export const getLatestViewedTestCase = (state: ApplicationState) =>
  state.latestViewedTestCase;
