import {createSelector} from 'reselect';

import {ApplicationState} from '../reducers';

import {sortArrayOfObjectsByKey} from '../../utils';
import {TestCase} from './types';

export const getTestCasesSelector = (state: ApplicationState) =>
  state.testCases.data;

export const getTestCasesLoadingSelector = (state: ApplicationState) =>
  state.testCases.loading;

export const getTestCasesSyncedSelector = (state: ApplicationState) =>
  state.testCases.synced;

export const getChronoSortedTestCasesSelector = createSelector(
  getTestCasesSelector,
  (testCases) => {
    /*
     * Sort by oldest to latest
     */
    const sortedTestCases = sortArrayOfObjectsByKey(testCases, 'dateCreated');

    return sortedTestCases;
  },
);

export const getSortedTestCasesSelector = createSelector(
  getTestCasesSelector,
  (testCases) => {
    /*
     * Sort by latest to oldest
     */
    const sortedTestCases = sortArrayOfObjectsByKey(
      testCases,
      'dateCreated',
      true,
    );

    return sortedTestCases;
  },
);

export const getLatestTestCaseSelector = createSelector(
  getTestCasesSelector,
  getSortedTestCasesSelector,
  (testCases) => {
    /*
     * Grab the latest
     */
    const latestTestCase = testCases[0];

    return latestTestCase;
  },
);

export const getPreviousTestCaseSelector = createSelector(
  getSortedTestCasesSelector,
  (testCases) => {
    /*
     * Grab the second last one
     */
    const previousTestCase = testCases[1];

    return previousTestCase;
  },
);

export const getTestCasesTimelineDataSelector = createSelector(
  getChronoSortedTestCasesSelector,
  (testCases: TestCase[]) => {
    const timelineData = testCases.map((testCase) => {
      return {
        value: testCase.tests,
        date: new Date(testCase.dateCreated),
      };
    });

    return timelineData;
  },
);

export const getLatestChangeInTestCasesSelector = createSelector(
  getSortedTestCasesSelector,
  (cases: TestCase[]) => {
    const latestCase = cases[0];

    if (!latestCase) {
      return;
    }

    const secondLatestCase = cases[1];

    if (!secondLatestCase) {
      return;
    }

    const latestChange = latestCase.tests - secondLatestCase.tests;

    return latestChange;
  },
);
