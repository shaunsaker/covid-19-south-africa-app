import {Reducer} from 'redux';
import {TimelineActionTypes, TimelineState, TimelineDataOptions} from './types';

export const initialState: TimelineState = {
  layout: {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  },
  dataOption: TimelineDataOptions.Cumulative,
};

const reducer: Reducer<TimelineState> = (state = initialState, action) => {
  switch (action.type) {
    case TimelineActionTypes.SET_TIMELINE_LAYOUT: {
      return {...state, layout: action.payload.layout};
    }
    case TimelineActionTypes.SET_TIMELINE_DATA_OPTION: {
      return {...state, dataOption: action.payload.dataOption};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
