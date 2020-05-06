import {LayoutRectangle} from 'react-native';

export enum TimelineDataOptions {
  Cumulative = 'Cumulative',
  PerDay = 'Per Day',
}

export interface TimelineDataPoint {
  date: Date;
  value: number;
}

export type TimelineData = TimelineDataPoint[];

export enum TimelineActionTypes {
  SET_TIMELINE_LAYOUT = '@@timeline/SET_TIMELINE_LAYOUT',
  SET_TIMELINE_DATA_OPTION = '@@timeline/SET_TIMELINE_DATA_OPTION',
}

export interface TimelineState {
  layout: LayoutRectangle;
  dataOption: TimelineDataOptions;
}
