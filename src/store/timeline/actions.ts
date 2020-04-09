import {action} from 'typesafe-actions';
import {LayoutRectangle} from 'react-native';

import {TimelineActionTypes, TimelineDataOptions} from './types';

export const setTimelineLayout = (layout: LayoutRectangle) =>
  action(TimelineActionTypes.SET_TIMELINE_LAYOUT, {layout});

export const setTimelineDataOption = (dataOption: TimelineDataOptions) =>
  action(TimelineActionTypes.SET_TIMELINE_DATA_OPTION, {dataOption});
