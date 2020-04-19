import {all, fork, takeEvery, call, put, select} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {RecoveredCasesActionTypes, RecoveredCase} from './types';
import {sync} from '../../services/firestore';
import {
  setRecoveredCases,
  setRecoveredCasesLoading,
  setRecoveredCasesSynced,
} from './actions';
import {getRecoveredCasesSyncedSelector} from './selectors';
import {isSelectedCountrySouthAfricaSelector} from '../countries/selectors';
import {getCountryData} from '../countries/sagas';

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetRecoveredCases() {
  const isSynced = yield select(getRecoveredCasesSyncedSelector);
  const isSelectedCountrySouthAfrica = yield select(
    isSelectedCountrySouthAfricaSelector,
  );

  if (isSelectedCountrySouthAfrica && !isSynced) {
    yield put(setRecoveredCasesLoading(true));
    const channel = yield call(createChannel, 'recoveryCases');

    yield takeEvery(channel, function* listen(recoveredCases: RecoveredCase[]) {
      yield put(setRecoveredCases(recoveredCases));
      yield put(setRecoveredCasesLoading(false));
      yield put(setRecoveredCasesSynced(true));
    });
  } else if (!isSelectedCountrySouthAfrica) {
    yield call(getCountryData);
  }
}

function* watchGetRecoveredCases() {
  yield takeEvery(
    RecoveredCasesActionTypes.GET_RECOVERED_CASES,
    onGetRecoveredCases,
  );
}

function* recoveredCasesSaga() {
  yield all([fork(watchGetRecoveredCases)]);
}

export default recoveredCasesSaga;
