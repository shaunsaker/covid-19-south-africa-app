import {all, fork, takeEvery, call, put} from 'redux-saga/effects';

import {ConfirmedCasesActionTypes} from './types';

function* onGetConfirmedCases(action) {
  // TODO:
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
