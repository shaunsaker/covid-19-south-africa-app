import {combineReducers} from 'redux';

import confirmedCases from './confirmedCases/reducer';
import {ConfirmedCasesState} from './confirmedCases/types';

export interface ApplicationState {
  confirmedCases: ConfirmedCasesState;
}

const rootReducer = combineReducers({
  confirmedCases,
});

export default rootReducer;
