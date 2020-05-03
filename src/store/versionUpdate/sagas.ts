import {all, fork, takeEvery, call, put, select} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {VersionUpdateTypes} from './types';
import {sync} from '../../services/firestore';
import {setVersionUpdate} from './actions';

const createChannel = (collection: string) => {
  return eventChannel((emit) => {
    sync(collection, emit);
    // The subscriber must return an unsubscribe function
    return () => {};
  });
};

function* onGetVersionUpdate() {
  const channel = yield call(createChannel, 'versionUpdate');

  yield takeEvery(channel, function* listen(versionUpdates: {id: string}[]) {
    const latestVersionUpdate = versionUpdates.slice(
      versionUpdates.length - 1,
      versionUpdates.length,
    )[0];
    const latestVersion = latestVersionUpdate ? latestVersionUpdate.id : null;

    yield put(setVersionUpdate(latestVersion));
  });
}

function* watchGetVersionUpdate() {
  yield takeEvery(VersionUpdateTypes.GET_VERSION_UPDATE, onGetVersionUpdate);
}

function* versionUpdateSaga() {
  yield all([fork(watchGetVersionUpdate)]);
}

export default versionUpdateSaga;
