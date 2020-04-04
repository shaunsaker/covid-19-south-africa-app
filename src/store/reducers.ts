import {combineReducers} from 'redux';

import confirmedCases from './confirmedCases/reducer';
import {ConfirmedCasesState} from './confirmedCases/types';
import latestViewedConfirmedCase from './latestViewedConfirmedCase/reducer';
import {LatestViewedConfirmedCaseState} from './latestViewedConfirmedCase/types';
import sideMenu from './sideMenu/reducer';
import {SideMenuState} from './sideMenu/types';
import deathCases from './deathCases/reducer';
import {DeathCasesState} from './deathCases/types';

export interface ApplicationState {
  confirmedCases: ConfirmedCasesState;
  latestViewedConfirmedCase: LatestViewedConfirmedCaseState;
  sideMenu: SideMenuState;
  deathCases: DeathCasesState;
}

const rootReducer = combineReducers({
  confirmedCases,
  latestViewedConfirmedCase,
  sideMenu,
  deathCases,
});

export default rootReducer;
