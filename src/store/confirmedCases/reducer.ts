import {Reducer} from 'redux';
import {ConfirmedCasesActionTypes, ConfirmedCasesState} from './types';

export const initialState: ConfirmedCasesState = {
  data: [],
  loading: false,
  synced: false,
};

const reducer: Reducer<ConfirmedCasesState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ConfirmedCasesActionTypes.SET_CONFIRMED_CASES: {
      return {...state, data: action.payload.confirmedCases};
    }
    case ConfirmedCasesActionTypes.SET_CONFIRMED_CASES_LOADING: {
      return {...state, loading: action.payload.loading};
    }
    case ConfirmedCasesActionTypes.SET_CONFIRMED_CASES_SYNCED: {
      return {...state, synced: action.payload.synced};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
