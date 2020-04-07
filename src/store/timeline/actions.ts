import {action} from 'typesafe-actions';
import {LayoutRectangle} from 'react-native';

import {TimelineActionTypes} from './types';

export const setTimelineLayout = (layout: LayoutRectangle) =>
  action(TimelineActionTypes.SET_TIMELINE_LAYOUT, {layout});
