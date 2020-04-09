import {LayoutRectangle} from 'react-native';

export enum TimelineDataOptions {
  Cumulative,
  PerDay,
}

export enum TimelineActionTypes {
  SET_TIMELINE_LAYOUT = '@@timeline/SET_TIMELINE_LAYOUT',
  SET_TIMELINE_DATA_OPTION = '@@timeline/SET_TIMELINE_DATA_OPTION',
}

export interface TimelineState {
  layout: LayoutRectangle;
  dataOption: TimelineDataOptions;
}
