import {all, fork} from 'redux-saga/effects';

import confirmedCases from './confirmedCases/sagas';

function* rootSaga() {
  yield all([fork(confirmedCases)]);
}

export default rootSaga;
