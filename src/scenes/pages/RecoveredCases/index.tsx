import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getRecoveredCases} from '../../../store/actions';
import {getRecoveredCasesSyncedSelector} from '../../../store/selectors';

import RecoveredCases from './RecoveredCases';

const RecoveredCasesContainer = () => {
  const dispatch = useDispatch();
  const synced = useSelector(getRecoveredCasesSyncedSelector);

  useEffect(() => {
    /*
     * On mount, if we have not synced, fetch the recovered cases
     */
    if (!synced) {
      dispatch(getRecoveredCases());
    }
  }, [dispatch, synced]);

  return <RecoveredCases />;
};

export default RecoveredCasesContainer;
