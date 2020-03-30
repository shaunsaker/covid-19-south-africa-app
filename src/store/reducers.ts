import {combineReducers} from 'redux';

import confirmedCases from './confirmedCases/reducer';
import {ConfirmedCasesState} from './confirmedCases/types';
import sideMenu from './sideMenu/reducer';
import {SideMenuState} from './sideMenu/types';

export interface ApplicationState {
  confirmedCases: ConfirmedCasesState;
  sideMenu: SideMenuState;
}

const rootReducer = combineReducers({
  confirmedCases,
  sideMenu,
});

export default rootReducer;
