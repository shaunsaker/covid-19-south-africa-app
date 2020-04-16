import {all, fork, takeEvery, call, put} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {ConfirmedCasesActionTypes, ConfirmedCase} from './types';
import {sync} from '../../services/firestore';
import {
  setConfirmedCases,
  setConfirmedCasesLoading,
  setConfirmedCasesSynced,
} from './actions';

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetConfirmedCases() {
  yield put(setConfirmedCasesLoading(true));
  const channel = yield call(createChannel, 'confirmedCases');

  yield takeEvery(channel, function* listen(confirmedCases: ConfirmedCase[]) {
    yield put(setConfirmedCases(confirmedCases));
    yield put(setConfirmedCasesLoading(false));
    yield put(setConfirmedCasesSynced(true));
  });
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
