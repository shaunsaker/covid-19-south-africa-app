import {TestCase} from '../types';

export enum LatestViewedTestCase {
  SET_LATEST_VIEWED_TEST_CASE = '@@lastViewedTestCase/SET_LATEST_VIEWED_TEST_CASE',
}

export type LatestViewedTestCaseState = TestCase | null;
