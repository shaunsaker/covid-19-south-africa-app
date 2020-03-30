import {ApplicationState} from '../reducers';

export const getLatestViewedConfirmedCase = (state: ApplicationState) =>
  state.latestViewedConfirmedCase;
