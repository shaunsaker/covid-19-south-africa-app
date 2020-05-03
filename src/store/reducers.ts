import {combineReducers} from 'redux';

import confirmedCases from './confirmedCases/reducer';
import {ConfirmedCasesState} from './confirmedCases/types';
import latestViewedConfirmedCase from './latestViewedConfirmedCase/reducer';
import {LatestViewedConfirmedCaseState} from './latestViewedConfirmedCase/types';
import sideMenu from './sideMenu/reducer';
import {SideMenuState} from './sideMenu/types';
import deathCases from './deathCases/reducer';
import {DeathCasesState} from './deathCases/types';
import latestViewedDeathCase from './latestViewedDeathCase/reducer';
import {LatestViewedDeathCaseState} from './latestViewedDeathCase/types';
import navigation from './navigation/reducer';
import {NavigationState} from './navigation/types';
import timeline from './timeline/reducer';
import {TimelineState} from './timeline/types';
import recoveredCases from './recoveredCases/reducer';
import {RecoveredCasesState} from './recoveredCases/types';
import latestViewedRecoveredCase from './latestViewedRecoveredCase/reducer';
import {LatestViewedRecoveredCaseState} from './latestViewedRecoveredCase/types';
import testCases from './testCases/reducer';
import {TestCasesState} from './testCases/types';
import latestViewedTestCase from './latestViewedTestCase/reducer';
import {LatestViewedTestCaseState} from './latestViewedTestCase/types';
import countries from './countries/reducer';
import {CountriesState} from './countries/types';
import versionUpdate from './versionUpdate/reducer';
import {VersionUpdateState} from './versionUpdate/types';

export interface ApplicationState {
  confirmedCases: ConfirmedCasesState;
  latestViewedConfirmedCase: LatestViewedConfirmedCaseState;
  sideMenu: SideMenuState;
  deathCases: DeathCasesState;
  latestViewedDeathCase: LatestViewedDeathCaseState;
  navigation: NavigationState;
  timeline: TimelineState;
  recoveredCases: RecoveredCasesState;
  latestViewedRecoveredCase: LatestViewedRecoveredCaseState;
  testCases: TestCasesState;
  latestViewedTestCase: LatestViewedTestCaseState;
  countries: CountriesState;
  versionUpdate: VersionUpdateState;
}

const rootReducer = combineReducers({
  confirmedCases,
  latestViewedConfirmedCase,
  sideMenu,
  deathCases,
  latestViewedDeathCase,
  navigation,
  timeline,
  recoveredCases,
  latestViewedRecoveredCase,
  testCases,
  latestViewedTestCase,
  countries,
  versionUpdate,
});

export default rootReducer;
