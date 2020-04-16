import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getDeathCases} from '../../../store/actions';
import {getDeathCasesSyncedSelector} from '../../../store/selectors';

import DeathCases from './DeathCases';

const DeathCasesContainer = () => {
  const dispatch = useDispatch();
  const synced = useSelector(getDeathCasesSyncedSelector);

  useEffect(() => {
    /*
     * On mount, if we have not synced, fetch the death cases
     */
    if (!synced) {
      dispatch(getDeathCases());
    }
  }, [dispatch, synced]);

  return <DeathCases />;
};

export default DeathCasesContainer;
