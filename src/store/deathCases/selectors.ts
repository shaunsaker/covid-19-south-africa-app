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
