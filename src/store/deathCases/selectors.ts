import {createSelector} from 'reselect';

import {ApplicationState} from '../reducers';

import {sortArrayOfObjectsByKey} from '../../utils';

export const getDeathCasesSelector = (state: ApplicationState) =>
  state.deathCases.data;

export const getDeathCasesLoadingSelector = (state: ApplicationState) =>
  state.deathCases.loading;

export const getChronoSortedDeathCasesSelector = createSelector(
  getDeathCasesSelector,
  (deathCases) => {
    /*
     * Sort by oldest to latest
     */
    const sortedDeathCases = sortArrayOfObjectsByKey(deathCases, 'dateCreated');

    return sortedDeathCases;
  },
);

export const getSortedDeathCasesSelector = createSelector(
  getDeathCasesSelector,
  (deathCases) => {
    /*
     * Sort by latest to oldest
     */
    const sortedDeathCases = sortArrayOfObjectsByKey(
      deathCases,
      'dateCreated',
      true,
    );

    return sortedDeathCases;
  },
);

export const getLatestDeathCaseSelector = createSelector(
  getDeathCasesSelector,
  getSortedDeathCasesSelector,
  (deathCases) => {
    /*
     * Grab the latest
     */
    const latestDeathCase = deathCases[0];

    return latestDeathCase;
  },
);

export const getPreviousDeathCaseSelector = createSelector(
  getSortedDeathCasesSelector,
  (deathCases) => {
    /*
     * Grab the second last one
     */
    const previousDeathCase = deathCases[1];

    return previousDeathCase;
  },
);
