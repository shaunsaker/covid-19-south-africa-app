import {Reducer} from 'redux';
import {RecoveredCasesActionTypes, RecoveredCasesState} from './types';

export const initialState: RecoveredCasesState = {
  data: [],
  loading: false,
  synced: false,
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
    case RecoveredCasesActionTypes.SET_RECOVERED_CASES_SYNCED: {
      return {...state, synced: action.payload.synced};
    }
    case RecoveredCasesActionTypes.RESET_RECOVERED_CASES: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
