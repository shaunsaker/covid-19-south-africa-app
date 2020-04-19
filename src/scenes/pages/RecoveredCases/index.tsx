import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getRecoveredCases} from '../../../store/actions';

import RecoveredCases from './RecoveredCases';
import {getSelectedCountrySelector} from '../../../store/selectors';

const RecoveredCasesContainer = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector(getSelectedCountrySelector);

  useEffect(() => {
    dispatch(getRecoveredCases());
  }, [dispatch, selectedCountry.code]);

  return <RecoveredCases />;
};

export default RecoveredCasesContainer;
