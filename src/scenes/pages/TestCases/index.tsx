import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {getTestCases} from '../../../store/actions';

import TestCases from './TestCases';

const TestCasesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    /*
     * On mount, fetch the confirmed cases
     */
    dispatch(getTestCases());
  }, [dispatch]);

  return <TestCases />;
};

export default TestCasesContainer;
