import {Reducer} from 'redux';
import {DeathCasesActionTypes, DeathCasesState} from './types';

export const initialState: DeathCasesState = {
  data: [],
  loading: false,
  synced: false,
};

const reducer: Reducer<DeathCasesState> = (state = initialState, action) => {
  switch (action.type) {
    case DeathCasesActionTypes.SET_DEATH_CASES: {
      return {...state, data: action.payload.deathCases};
    }
    case DeathCasesActionTypes.SET_DEATH_CASES_LOADING: {
      return {...state, loading: action.payload.loading};
    }
    case DeathCasesActionTypes.SET_DEATH_CASES_SYNCED: {
      return {...state, synced: action.payload.synced};
    }
    case DeathCasesActionTypes.RESET_DEATH_CASES: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
