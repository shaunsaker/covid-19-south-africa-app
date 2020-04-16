import {Reducer} from 'redux';
import {TestCasesActionTypes, TestCasesState} from './types';

export const initialState: TestCasesState = {
  data: [],
  loading: false,
  synced: false,
};

const reducer: Reducer<TestCasesState> = (state = initialState, action) => {
  switch (action.type) {
    case TestCasesActionTypes.SET_TEST_CASES: {
      return {...state, data: action.payload.testCases};
    }
    case TestCasesActionTypes.SET_TEST_CASES_LOADING: {
      return {...state, loading: action.payload.loading};
    }
    case TestCasesActionTypes.SET_TEST_CASES_SYNCED: {
      return {...state, synced: action.payload.synced};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
