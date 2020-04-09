import {ApplicationState} from '../reducers';

export const timelineLayoutSelector = (state: ApplicationState) =>
  state.timeline.layout;

export const timelineDataOptionSelector = (state: ApplicationState) =>
  state.timeline.dataOption;
