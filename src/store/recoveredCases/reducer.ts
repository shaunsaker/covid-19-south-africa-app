import {Reducer} from 'redux';
import {RecoveredCasesActionTypes, RecoveredCasesState} from './types';

export const initialState: RecoveredCasesState = {
  data: [],
  loading: false,
};

const reducer: Reducer<RecoveredCasesState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case RecoveredCasesActionTypes.SET_RECOVERED_CASES: {
      return {...state, data: action.payload.recoveredCases};
    }
    case RecoveredCasesActionTypes.SET_RECOVERED_CASES_LOADING: {
      return {...state, loading: action.payload.loading};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
