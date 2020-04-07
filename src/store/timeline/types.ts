import {LayoutRectangle} from 'react-native';

export enum TimelineActionTypes {
  SET_TIMELINE_LAYOUT = '@@confirmedCases/SET_TIMELINE_LAYOUT',
}

export interface TimelineState {
  layout: LayoutRectangle;
}
