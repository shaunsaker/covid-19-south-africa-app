import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getDeathCases} from '../../../store/actions';

import DeathCases from './DeathCases';
import {
  getSelectedCountrySelector,
  getDeathCasesSyncedSelector,
} from '../../../store/selectors';

const DeathCasesContainer = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector(getSelectedCountrySelector);
  const synced = useSelector(getDeathCasesSyncedSelector);

  useEffect(() => {
    dispatch(getDeathCases());
  }, [dispatch, selectedCountry.code, synced]);

  return <DeathCases />;
};

export default DeathCasesContainer;
