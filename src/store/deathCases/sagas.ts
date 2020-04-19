import {all, fork, takeEvery, call, put, select} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {DeathCasesActionTypes, DeathCase} from './types';
import {sync} from '../../services/firestore';
import {
  setDeathCases,
  setDeathCasesLoading,
  setDeathCasesSynced,
} from './actions';
import {getDeathCasesSyncedSelector} from './selectors';
import {isSelectedCountrySouthAfricaSelector} from '../countries/selectors';
import {getCountryData} from '../countries/sagas';

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetDeathCases() {
  const isSynced = yield select(getDeathCasesSyncedSelector);
  const isSelectedCountrySouthAfrica = yield select(
    isSelectedCountrySouthAfricaSelector,
  );

  if (isSelectedCountrySouthAfrica && !isSynced) {
    yield put(setDeathCasesLoading(true));
    const channel = yield call(createChannel, 'deathCases');

    yield takeEvery(channel, function* listen(deathCases: DeathCase[]) {
      yield put(setDeathCases(deathCases));
      yield put(setDeathCasesLoading(false));
      yield put(setDeathCasesSynced(true));
    });
  } else if (!isSelectedCountrySouthAfrica) {
    yield call(getCountryData);
  }
}

function* watchGetDeathCases() {
  yield takeEvery(DeathCasesActionTypes.GET_DEATH_CASES, onGetDeathCases);
}

function* deathCasesSaga() {
  yield all([fork(watchGetDeathCases)]);
}

export default deathCasesSaga;
