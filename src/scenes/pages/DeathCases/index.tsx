import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getDeathCases} from '../../../store/actions';

import DeathCases from './DeathCases';
import {getSelectedCountrySelector} from '../../../store/selectors';

const DeathCasesContainer = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector(getSelectedCountrySelector);

  useEffect(() => {
    dispatch(getDeathCases());
  }, [dispatch, selectedCountry.code]);

  return <DeathCases />;
};

export default DeathCasesContainer;
