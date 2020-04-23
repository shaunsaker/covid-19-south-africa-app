import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getTestCases} from '../../../store/actions';

import TestCases from './TestCases';
import {
  getSelectedCountrySelector,
  getTestCasesSyncedSelector,
} from '../../../store/selectors';

const TestCasesContainer = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector(getSelectedCountrySelector);
  const synced = useSelector(getTestCasesSyncedSelector);

  useEffect(() => {
    dispatch(getTestCases());
  }, [dispatch, selectedCountry.code, synced]);

  return <TestCases />;
};

export default TestCasesContainer;
