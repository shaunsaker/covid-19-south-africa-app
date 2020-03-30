import {createSelector} from 'reselect';

import {ApplicationState} from '../reducers';

import {sortArrayOfObjectsByKey} from '../../utils';

const getConfirmedCasesSelector = (state: ApplicationState) =>
  state.confirmedCases;

const getSortedConfirmedCasesSelector = createSelector(
  getConfirmedCasesSelector,
  (confirmedCases) => {
    /*
     * Sort by latest to oldest
     */
    const sortedConfirmedCases = sortArrayOfObjectsByKey(
      confirmedCases,
      'dateAdded',
      true,
    );

    return sortedConfirmedCases;
  },
);

export const getLatestConfirmedCaseSelector = createSelector(
  getConfirmedCasesSelector,
  getSortedConfirmedCasesSelector,
  (confirmedCases) => {
    /*
     * Grab the latest
     */
    const latestConfirmedCase = confirmedCases[0];

    return latestConfirmedCase;
  },
);

export const getPreviousConfirmedCaseSelector = createSelector(
  getSortedConfirmedCasesSelector,
  (confirmedCases) => {
    /*
     * Grab the second last one
     */
    const previousConfirmedCase = confirmedCases[1];

    return previousConfirmedCase;
  },
);
