import {call, put, select} from 'redux-saga/effects';

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
import {setTestCases} from '../testCases/actions';

interface CountriesApiLocation {
  id: number;
  country_code: string;
}

interface CountriesApiLocationsResponse {
  locations: CountriesApiLocation[];
}

type CountriesApiTimelinesTypes = 'confirmed' | 'recovered' | 'deaths';

interface CountriesApiTimeline {
  [key: string]: number;
}

type CountriesApiCountryResponse = {
  location: {
    timelines: {
      [key in CountriesApiTimelinesTypes]: {
        timeline: CountriesApiTimeline;
      };
    };
  };
};

export function* getCountryData() {
  yield put(setConfirmedCasesLoading(true));
  yield put(setRecoveredCasesLoading(true));
  yield put(setDeathCasesLoading(true));
  const countriesApiLocationsResponse: CountriesApiLocationsResponse = yield call(
    fetch,
    countriesApi,
  );
  const selectedCountry = yield select(getSelectedCountrySelector);
  const selectedCountryApi = countriesApiLocationsResponse.locations.filter(
    (location) => location.country_code === selectedCountry.code,
  )[0];

  if (!selectedCountryApi) {
    yield put(setConfirmedCases([]));
    yield put(setConfirmedCasesLoading(false));
    yield put(setRecoveredCases([]));
    yield put(setRecoveredCasesLoading(false));
    yield put(setDeathCases([]));
    yield put(setDeathCasesLoading(false));
  } else {
    const selectedCountryId = selectedCountryApi.id;
    const countriesApiCountryResponse: CountriesApiCountryResponse = yield call(
      fetch,
      `${countriesApi}/${selectedCountryId}`,
    );
    const confirmedCasesTimeline =
      countriesApiCountryResponse.location.timelines.confirmed.timeline;
    const confirmedCases: ConfirmedCase[] = processCountryData(
      confirmedCasesTimeline,
      'confirmedCases',
    );
    yield put(setConfirmedCases(confirmedCases));
    yield put(setConfirmedCasesLoading(false));

    const recoveredCasesTimeline =
      countriesApiCountryResponse.location.timelines.recovered.timeline;
    const recoveredCases: RecoveredCase[] = processCountryData(
      recoveredCasesTimeline,
      'recovered',
    );
    yield put(setRecoveredCases(recoveredCases));
    yield put(setRecoveredCasesLoading(false));

    const deathCasesTimeline =
      countriesApiCountryResponse.location.timelines.deaths.timeline;
    const deathCases: DeathCase[] = processCountryData(
      deathCasesTimeline,
      'deaths',
    );
    yield put(setDeathCases(deathCases));
    yield put(setDeathCasesLoading(false));
  }
}
