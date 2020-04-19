import {all, fork, takeEvery, call, put, select} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import {TestCasesActionTypes, TestCase} from './types';
import {sync} from '../../services/firestore';
import {setTestCases, setTestCasesLoading, setTestCasesSynced} from './actions';
import {getTestCasesSyncedSelector} from './selectors';
import {getCountryData} from '../countries/sagas';
import {isSelectedCountrySouthAfricaSelector} from '../countries/selectors';

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetTestCases() {
  const isSynced = yield select(getTestCasesSyncedSelector);
  const isSelectedCountrySouthAfrica = yield select(
    isSelectedCountrySouthAfricaSelector,
  );

  if (isSelectedCountrySouthAfrica && !isSynced) {
    yield put(setTestCasesLoading(true));
    const channel = yield call(createChannel, 'testCases');

    yield takeEvery(channel, function* listen(testCases: TestCase[]) {
      yield put(setTestCases(testCases));
      yield put(setTestCasesLoading(false));
      yield put(setTestCasesSynced(true));
    });
  } else if (!isSelectedCountrySouthAfrica) {
    yield call(getCountryData);
  }
}

function* watchGetTestCases() {
  yield takeEvery(TestCasesActionTypes.GET_TEST_CASES, onGetTestCases);
}

function* testCasesSaga() {
  yield all([fork(watchGetTestCases)]);
}

export default testCasesSaga;
