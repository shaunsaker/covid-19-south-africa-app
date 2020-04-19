import {action} from 'typesafe-actions';

import {TestCasesActionTypes, TestCase} from './types';

export const getTestCases = () => action(TestCasesActionTypes.GET_TEST_CASES);

export const setTestCases = (testCases: TestCase[]) =>
  action(TestCasesActionTypes.SET_TEST_CASES, {testCases});

export const setTestCasesLoading = (loading: boolean) =>
  action(TestCasesActionTypes.SET_TEST_CASES_LOADING, {loading});

export const setTestCasesSynced = (synced: boolean) =>
  action(TestCasesActionTypes.SET_TEST_CASES_SYNCED, {synced});

export const resetTestCases = () =>
  action(TestCasesActionTypes.RESET_TEST_CASES);
