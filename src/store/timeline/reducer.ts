import {Reducer} from 'redux';
import {TimelineActionTypes, TimelineState} from './types';

export const initialState: TimelineState = {
  layout: {},
};

const reducer: Reducer<TimelineState> = (state = initialState, action) => {
  switch (action.type) {
    case TimelineActionTypes.SET_TIMELINE_LAYOUT: {
      return {...state, layout: action.payload.layout};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
