import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {
  setConfirmedCasesSynced,
  setDeathCasesSynced,
  setRecoveredCasesSynced,
  setTestCasesSynced,
} from '../../store/actions';

const DataSyncHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    /*
     * Toggle sync on all db sync actions to false so we can fetch the data (again)
     */
    dispatch(setConfirmedCasesSynced(false));
    dispatch(setDeathCasesSynced(false));
    dispatch(setRecoveredCasesSynced(false));
    dispatch(setTestCasesSynced(false));
  });

  return null;
};

export default DataSyncHandler;
