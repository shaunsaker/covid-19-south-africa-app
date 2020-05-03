import {ApplicationState} from '../reducers';

export const getVersionUpdateSelector = (state: ApplicationState) =>
  state.versionUpdate;
