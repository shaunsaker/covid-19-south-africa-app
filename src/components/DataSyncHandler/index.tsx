import {useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {AppState, AppStateStatus} from 'react-native';

import {
  setConfirmedCasesSynced,
  setDeathCasesSynced,
  setRecoveredCasesSynced,
  setTestCasesSynced,
} from '../../store/actions';

const DataSyncHandler = () => {
  const dispatch = useDispatch();

  const resetDataSynced = useCallback(() => {
    dispatch(setConfirmedCasesSynced(false));
    dispatch(setDeathCasesSynced(false));
    dispatch(setRecoveredCasesSynced(false));
    dispatch(setTestCasesSynced(false));
  }, [dispatch]);

  const onAppStateChange = useCallback(
    (appState: AppStateStatus) => {
      if (appState === 'background') {
        resetDataSynced();
      }
    },
    [resetDataSynced],
  );

  useEffect(() => {
    resetDataSynced();

    AppState.addEventListener('change', onAppStateChange);

    return () => {
      AppState.removeEventListener('change', onAppStateChange);
    };
  });

  return null;
};

export default DataSyncHandler;
