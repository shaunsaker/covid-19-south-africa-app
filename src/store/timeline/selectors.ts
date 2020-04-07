import {ApplicationState} from '../reducers';

export const timelineLayoutSelector = (state: ApplicationState) =>
  state.timeline.layout;
