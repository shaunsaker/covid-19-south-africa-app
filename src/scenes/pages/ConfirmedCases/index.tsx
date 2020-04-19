import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getConfirmedCases} from '../../../store/actions';

import ConfirmedCases from './ConfirmedCases';
import {getSelectedCountrySelector} from '../../../store/selectors';

const ConfirmedCasesContainer = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector(getSelectedCountrySelector);

  useEffect(() => {
    dispatch(getConfirmedCases());
  }, [dispatch, selectedCountry.code]);

  return <ConfirmedCases />;
};

export default ConfirmedCasesContainer;
