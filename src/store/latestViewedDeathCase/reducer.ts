import {Reducer} from 'redux';
import {LatestViewedDeathCase, LatestViewedDeathCaseState} from './types';

export const initialState: LatestViewedDeathCaseState = null;

const reducer: Reducer<LatestViewedDeathCaseState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LatestViewedDeathCase.SET_LATEST_VIEWED_DEATH_CASE: {
      return action.payload.deathCase;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
