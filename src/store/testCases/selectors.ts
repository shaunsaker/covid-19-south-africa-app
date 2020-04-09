import {createSelector} from 'reselect';

import {ApplicationState} from '../reducers';

import {sortArrayOfObjectsByKey} from '../../utils';

export const getTestCasesSelector = (state: ApplicationState) =>
  state.testCases.data;

export const getTestCasesLoadingSelector = (state: ApplicationState) =>
  state.testCases.loading;

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
