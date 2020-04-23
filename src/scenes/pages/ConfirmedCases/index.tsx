import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getConfirmedCases} from '../../../store/actions';

import ConfirmedCases from './ConfirmedCases';
import {
  getSelectedCountrySelector,
  getConfirmedCasesSyncedSelector,
} from '../../../store/selectors';

const ConfirmedCasesContainer = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector(getSelectedCountrySelector);
  const synced = useSelector(getConfirmedCasesSyncedSelector);

  useEffect(() => {
    dispatch(getConfirmedCases());
  }, [dispatch, selectedCountry.code, synced]);

  return <ConfirmedCases />;
};

export default ConfirmedCasesContainer;
