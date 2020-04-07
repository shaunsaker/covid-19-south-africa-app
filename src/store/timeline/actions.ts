import {action} from 'typesafe-actions';
import {LayoutChangeEvent} from 'react-native';

import {TimelineActionTypes} from './types';

export const setTimelineLayout = (layout: LayoutChangeEvent) =>
  action(TimelineActionTypes.SET_TIMELINE_LAYOUT, {layout});
