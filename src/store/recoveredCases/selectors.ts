import {createSelector} from 'reselect';

import {ApplicationState} from '../reducers';

import {sortArrayOfObjectsByKey} from '../../utils';
import {getLatestDeathCaseSelector} from '../../store/selectors';
import {RecoveredCase} from './types';

export const getRecoveredCasesSelector = (state: ApplicationState) =>
  state.recoveredCases.data;

export const getRecoveredCasesLoadingSelector = (state: ApplicationState) =>
  state.recoveredCases.loading;

export const getRecoveredCasesSyncedSelector = (state: ApplicationState) =>
  state.recoveredCases.synced;

export const getChronoSortedRecoveredCasesSelector = createSelector(
  getRecoveredCasesSelector,
  (recoveredCases) => {
    /*
     * Sort by oldest to latest
     */
    const sortedRecoveredCases = sortArrayOfObjectsByKey(
      recoveredCases,
      'dateCreated',
    );

    return sortedRecoveredCases;
  },
);

export const getSortedRecoveredCasesSelector = createSelector(
  getRecoveredCasesSelector,
  (recoveredCases) => {
    /*
     * Sort by latest to oldest
     */
    const sortedRecoveredCases = sortArrayOfObjectsByKey(
      recoveredCases,
      'dateCreated',
      true,
    );

    return sortedRecoveredCases;
  },
);

export const getLatestRecoveredCaseSelector = createSelector(
  getRecoveredCasesSelector,
  getSortedRecoveredCasesSelector,
  (recoveredCases) => {
    /*
     * Grab the latest
     */
    const latestRecoveredCase = recoveredCases[0];

    return latestRecoveredCase;
  },
);

export const getPreviousRecoveredCaseSelector = createSelector(
  getSortedRecoveredCasesSelector,
  (recoveredCases) => {
    /*
     * Grab the second last one
     */
    const previousRecoveredCase = recoveredCases[1];

    return previousRecoveredCase;
  },
);

export const getRecoveredCasesTimelineDataSelector = createSelector(
  getChronoSortedRecoveredCasesSelector,
  (recoveredCases: RecoveredCase[]) => {
    const timelineData = recoveredCases.map((recoveredCase) => {
      return {
        value: recoveredCase.recovered,
        date: new Date(recoveredCase.dateCreated),
      };
    });

    return timelineData;
  },
);

export const getRecoveredCasesAsPercentageOfClosedCasesSelector = (
  state: ApplicationState,
) => {
  const latestRecoveredCase = getLatestRecoveredCaseSelector(state);
  const latestDeathCase = getLatestDeathCaseSelector(state);
  const latestRecoveredCases = latestRecoveredCase
    ? latestRecoveredCase.recovered
    : 0;
  const latestDeathCases = latestDeathCase ? latestDeathCase.deaths : 0;
  const recoveredCasesAsPercentageOfClosedCases =
    latestRecoveredCases && latestDeathCases
      ? Math.round(
          (100 * latestRecoveredCases) /
            (latestRecoveredCases + latestDeathCases),
        )
      : 0;

  return recoveredCasesAsPercentageOfClosedCases;
};
