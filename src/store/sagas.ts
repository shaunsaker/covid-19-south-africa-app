import {all, fork} from 'redux-saga/effects';

import confirmedCases from './confirmedCases/sagas';
import deathCases from './deathCases/sagas';
import recoveredCases from './recoveredCases/sagas';
import testCases from './testCases/sagas';
import versionUpdate from './versionUpdate/sagas';

function* rootSaga() {
  yield all([
    fork(confirmedCases),
    fork(deathCases),
    fork(recoveredCases),
    fork(testCases),
    fork(versionUpdate),
  ]);
}

export default rootSaga;
