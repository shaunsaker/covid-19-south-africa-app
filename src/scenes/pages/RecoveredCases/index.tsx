import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {getRecoveredCases} from '../../../store/actions';

import RecoveredCases from './RecoveredCases';

const RecoveredCasesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    /*
     * On mount, fetch the confirmed cases
     */
    dispatch(getRecoveredCases());
  }, [dispatch]);

  return <RecoveredCases />;
};

export default RecoveredCasesContainer;
