import {Reducer} from 'redux';
import {LatestViewedTestCase, LatestViewedTestCaseState} from './types';

export const initialState: LatestViewedTestCaseState = null;

const reducer: Reducer<LatestViewedTestCaseState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LatestViewedTestCase.SET_LATEST_VIEWED_TEST_CASE: {
      return action.payload.testCase;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
