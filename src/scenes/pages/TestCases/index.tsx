import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getTestCases} from '../../../store/actions';

import TestCases from './TestCases';
import {getSelectedCountrySelector} from '../../../store/selectors';

const TestCasesContainer = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector(getSelectedCountrySelector);

  useEffect(() => {
    dispatch(getTestCases());
  }, [dispatch, selectedCountry.code]);

  return <TestCases />;
};

export default TestCasesContainer;
