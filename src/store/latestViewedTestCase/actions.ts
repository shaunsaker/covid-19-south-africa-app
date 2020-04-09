import {action} from 'typesafe-actions';

import {LatestViewedTestCase} from './types';
import {TestCase} from '../types';

export const setLatestViewedTestCase = (testCase: TestCase) =>
  action(LatestViewedTestCase.SET_LATEST_VIEWED_TEST_CASE, {
    testCase,
  });
