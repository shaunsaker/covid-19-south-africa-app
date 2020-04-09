import {all, fork, takeEvery, call, put} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {RecoveredCasesActionTypes, RecoveredCase} from './types';
import {sync} from '../../services/firestore';
import {setRecoveredCases, setRecoveredCasesLoading} from './actions';

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetRecoveredCases() {
  yield put(setRecoveredCasesLoading(true));
  const channel = yield call(createChannel, 'recoveredCases');

  yield takeEvery(channel, function* listen(recoveredCases: RecoveredCase[]) {
    yield put(setRecoveredCases(recoveredCases));
    yield put(setRecoveredCasesLoading(false));
  });
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
