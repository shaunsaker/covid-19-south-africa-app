import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getRecoveredCases} from '../../../store/actions';

import RecoveredCases from './RecoveredCases';
import {
  getSelectedCountrySelector,
  getRecoveredCasesSyncedSelector,
} from '../../../store/selectors';

const RecoveredCasesContainer = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector(getSelectedCountrySelector);
  const synced = useSelector(getRecoveredCasesSyncedSelector);

  useEffect(() => {
    dispatch(getRecoveredCases());
  }, [dispatch, selectedCountry.code, synced]);

  return <RecoveredCases />;
};

export default RecoveredCasesContainer;
