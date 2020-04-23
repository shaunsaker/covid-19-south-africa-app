import {call, put, select} from 'redux-saga/effects';
import moment from 'moment';

import {getSelectedCountrySelector} from '../countries/selectors';
import {fetch} from '../../services/fetch';
import {countriesApi} from '../../config';
import {processCountryData} from './processCountryData';
import {RecoveredCase} from '../recoveredCases/types';
import {
  setRecoveredCases,
  setRecoveredCasesLoading,
} from '../recoveredCases/actions';
import {DeathCase} from '../deathCases/types';
import {setDeathCases, setDeathCasesLoading} from '../deathCases/actions';
import {
  setConfirmedCasesLoading,
  setConfirmedCases,
} from '../confirmedCases/actions';
import {ConfirmedCase} from '../confirmedCases/types';
import {setTestCasesLoading, setTestCases} from '../testCases/actions';
import {ApiHistoricalData, ApiLatestData} from './types';
import {TestCase} from '../testCases/types';

export function* getCountryData() {
  yield put(setConfirmedCasesLoading(true));
  yield put(setRecoveredCasesLoading(true));
  yield put(setDeathCasesLoading(true));
  yield put(setTestCasesLoading(true));

  const selectedCountry = yield select(getSelectedCountrySelector);

  /*
   * 1. Get the historical data for the selected country
   * 2. Get the latest data for the selected country
   * 3. Collate the historical and latest data
   * 4. Set the data to the store
   */
  const historicalData: ApiHistoricalData = yield call(
    fetch,
    `${countriesApi}/historical/${selectedCountry.code}`,
  );
  const latestData: ApiLatestData = yield call(
    fetch,
    `${countriesApi}/countries/${selectedCountry.code}`,
  );
  const todayKey = moment().format('MM/DD/YY');

  const confirmedCasesTimeline = {
    ...historicalData.timeline.cases,
    [todayKey]: latestData.cases,
  };
  const confirmedCases: ConfirmedCase[] = processCountryData(
    confirmedCasesTimeline,
    'confirmedCases',
  );
  yield put(setConfirmedCases(confirmedCases));
  yield put(setConfirmedCasesLoading(false));

  const recoveredCasesTimeline = {
    ...historicalData.timeline.recovered,
    [todayKey]: latestData.recovered,
  };
  const recoveredCases: RecoveredCase[] = processCountryData(
    recoveredCasesTimeline,
    'recovered',
  );
  yield put(setRecoveredCases(recoveredCases));
  yield put(setRecoveredCasesLoading(false));

  const deathCasesTimeline = {
    ...historicalData.timeline.deaths,
    [todayKey]: latestData.deaths,
  };
  const deathCases: DeathCase[] = processCountryData(
    deathCasesTimeline,
    'deaths',
  );
  yield put(setDeathCases(deathCases));
  yield put(setDeathCasesLoading(false));

  const testCasesTimeline = {
    [todayKey]: latestData.tests,
  };
  const testCases: TestCase[] = processCountryData(testCasesTimeline, 'tests');
  yield put(setTestCases(testCases));
  yield put(setTestCasesLoading(false));
}
