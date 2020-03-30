import {all, fork, takeEvery, call, put} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {ConfirmedCasesActionTypes, ConfirmedCase} from './types';
import {sync} from '../../services/firestore';
import {setConfirmedCases} from './actions';

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetConfirmedCases() {
  const channel = yield call(createChannel, 'confirmedCases');

  yield takeEvery(channel, function* listen(confirmedCases: ConfirmedCase[]) {
    yield put(setConfirmedCases(confirmedCases));
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
