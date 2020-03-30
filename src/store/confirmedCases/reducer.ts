import {Reducer} from 'redux';
import {ConfirmedCasesActionTypes, ConfirmedCasesState} from './types';

export const initialState: ConfirmedCasesState = [];

const reducer: Reducer<ConfirmedCasesState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ConfirmedCasesActionTypes.SET_CONFIRMED_CASES: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default reducer;
