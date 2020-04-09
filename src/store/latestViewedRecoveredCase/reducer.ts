import {Reducer} from 'redux';
import {
  LatestViewedRecoveredCase,
  LatestViewedRecoveredCaseState,
} from './types';

export const initialState: LatestViewedRecoveredCaseState = null;

const reducer: Reducer<LatestViewedRecoveredCaseState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LatestViewedRecoveredCase.SET_LATEST_VIEWED_RECOVERED_CASE: {
      return action.payload.recoveredCase;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
