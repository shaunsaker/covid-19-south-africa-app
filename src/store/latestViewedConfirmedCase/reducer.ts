import {Reducer} from 'redux';
import {
  LatestViewedConfirmedCase,
  LatestViewedConfirmedCaseState,
} from './types';

export const initialState: LatestViewedConfirmedCaseState = null;

const reducer: Reducer<LatestViewedConfirmedCaseState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LatestViewedConfirmedCase.SET_LATEST_VIEWED_CONFIRMED_CASE: {
      return action.payload.confirmedCase;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
