import {all, fork} from 'redux-saga/effects';

import confirmedCases from './confirmedCases/sagas';
import deathCases from './deathCases/sagas';
import recoveredCases from './recoveredCases/sagas';
import testCases from './testCases/sagas';

function* rootSaga() {
  yield all([
    fork(confirmedCases),
    fork(deathCases),
    fork(recoveredCases),
    fork(testCases),
  ]);
}

export default rootSaga;
