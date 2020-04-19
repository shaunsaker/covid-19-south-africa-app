import {all, fork, takeEvery, call, put, select} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {ConfirmedCasesActionTypes, ConfirmedCase} from './types';
import {sync} from '../../services/firestore';
import {
  setConfirmedCases,
  setConfirmedCasesLoading,
  setConfirmedCasesSynced,
} from './actions';
import {getConfirmedCasesSyncedSelector} from './selectors';
import {isSelectedCountrySouthAfricaSelector} from '../countries/selectors';
import {getCountryData} from '../countries/sagas';

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

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetConfirmedCases() {
  const isSynced = yield select(getConfirmedCasesSyncedSelector);
  const isSelectedCountrySouthAfrica = yield select(
    isSelectedCountrySouthAfricaSelector,
  );

  if (isSelectedCountrySouthAfrica && !isSynced) {
    yield put(setConfirmedCasesLoading(true));
    const channel = yield call(createChannel, 'confirmedCases');

    yield takeEvery(channel, function* listen(confirmedCases: ConfirmedCase[]) {
      yield put(setConfirmedCases(confirmedCases));
      yield put(setConfirmedCasesLoading(false));
      yield put(setConfirmedCasesSynced(true));
    });
  } else if (!isSelectedCountrySouthAfrica) {
    yield call(getCountryData);
  }
}

function* watchGetConfirmedCases() {
  yield takeEvery(
    ConfirmedCasesActionTypes.GET_CONFIRMED_CASES,
    onGetConfirmedCases,
  );
}

function* confirmedCasesSaga() {
  yield all([fork(watchGetConfirmedCases)]);
}

export default confirmedCasesSaga;
