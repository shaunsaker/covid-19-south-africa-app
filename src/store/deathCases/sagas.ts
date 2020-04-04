import {all, fork, takeEvery, call, put} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {DeathCasesActionTypes, DeathCase} from './types';
import {sync} from '../../services/firestore';
import {setDeathCases, setDeathCasesLoading} from './actions';

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetConfirmedCases() {
  yield put(setDeathCasesLoading(true));
  const channel = yield call(createChannel, 'deathCases');

  yield takeEvery(channel, function* listen(deathCases: DeathCase[]) {
    yield put(setDeathCases(deathCases));
    yield put(setDeathCasesLoading(false));
  });
}

function* watchGetDeathCases() {
  yield takeEvery(DeathCasesActionTypes.GET_DEATH_CASES, onGetConfirmedCases);
}

function* deathCasesSaga() {
  yield all([fork(watchGetDeathCases)]);
}

export default deathCasesSaga;
