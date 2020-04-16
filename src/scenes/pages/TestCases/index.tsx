import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getTestCases} from '../../../store/actions';
import {getTestCasesSyncedSelector} from '../../../store/selectors';

import TestCases from './TestCases';

const TestCasesContainer = () => {
  const dispatch = useDispatch();
  const synced = useSelector(getTestCasesSyncedSelector);

  useEffect(() => {
    /*
     * On mount, if we have not synced, fetch the test cases
     */
    if (!synced) {
      dispatch(getTestCases());
    }
  }, [dispatch, synced]);

  return <TestCases />;
};

export default TestCasesContainer;
