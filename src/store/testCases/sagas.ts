import {all, fork, takeEvery, call, put} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {TestCasesActionTypes, TestCase} from './types';
import {sync} from '../../services/firestore';
import {setTestCases, setTestCasesLoading} from './actions';

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetTestCases() {
  yield put(setTestCasesLoading(true));
  const channel = yield call(createChannel, 'testCases');

  yield takeEvery(channel, function* listen(testCases: TestCase[]) {
    yield put(setTestCases(testCases));
    yield put(setTestCasesLoading(false));
  });
}

function* watchGetTestCases() {
  yield takeEvery(TestCasesActionTypes.GET_TEST_CASES, onGetTestCases);
}

function* testCasesSaga() {
  yield all([fork(watchGetTestCases)]);
}

export default testCasesSaga;
