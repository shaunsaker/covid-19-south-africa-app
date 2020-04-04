import {all, fork} from 'redux-saga/effects';

import confirmedCases from './confirmedCases/sagas';
import deathCases from './deathCases/sagas';

function* rootSaga() {
  yield all([fork(confirmedCases), fork(deathCases)]);
}

export default rootSaga;
