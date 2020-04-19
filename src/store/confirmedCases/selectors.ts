import {createSelector} from 'reselect';
import moment from 'moment';

import {ApplicationState} from '../reducers';

import {sortArrayOfObjectsByKey} from '../../utils';
import {ConfirmedCase} from './types';

export const getConfirmedCasesSelector = (state: ApplicationState) =>
  state.confirmedCases.data;

export const getConfirmedCasesLoadingSelector = (state: ApplicationState) =>
  state.confirmedCases.loading;

export const getConfirmedCasesSyncedSelector = (state: ApplicationState) =>
  state.confirmedCases.synced;

export const getChronoSortedConfirmedCasesSelector = createSelector(
  getConfirmedCasesSelector,
  (confirmedCases) => {
    /*
     * Sort by oldest to latest
     */
    const sortedConfirmedCases = sortArrayOfObjectsByKey(
      confirmedCases,
      'dateCreated',
    );

    return sortedConfirmedCases;
  },
);

export const getSortedConfirmedCasesSelector = createSelector(
  getConfirmedCasesSelector,
  (confirmedCases) => {
    /*
     * Sort by latest to oldest
     */
    const sortedConfirmedCases = sortArrayOfObjectsByKey(
      confirmedCases,
      'dateCreated',
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
     * Grab the second one
     */
    const previousConfirmedCase = confirmedCases[1];

    return previousConfirmedCase;
  },
);

export const getConfirmedCasesTimelineDataSelector = createSelector(
  getChronoSortedConfirmedCasesSelector,
  (confirmedCases: ConfirmedCase[]) => {
    const timelineData = confirmedCases.map((confirmedCase) => {
      return {
        value: confirmedCase.confirmedCases,
        date: new Date(confirmedCase.dateCreated),
      };
    });

    return timelineData;
  },
);

export const getAvgDailyChangeInLastWeekSelector = createSelector(
  getChronoSortedConfirmedCasesSelector,
  (confirmedCases) => {
    if (!confirmedCases.length) {
      return 0;
    }

    /*
     * Filter out the data for the last 7 days
     */
    const aWeekAgo = moment().subtract(7, 'days').toDate();
    const lastWeeksCases = confirmedCases.filter(
      (confirmedCase) => new Date(confirmedCase.dateAdded) >= aWeekAgo,
    );

    if (!lastWeeksCases.length) {
      return 0;
    }

    if (lastWeeksCases.length === 1) {
      return lastWeeksCases[0].confirmedCases;
    }

    /*
     * Compute the average daily change
     */
    const averages: number[] = [];
    const oneDayInMs = 1000 * 60 * 60 * 24;
    lastWeeksCases.forEach((item, index) => {
      if (index !== 0) {
        const date = new Date(item.dateAdded).getTime();
        const previousCase = lastWeeksCases[index - 1];
        const previousDate = new Date(previousCase.dateAdded).getTime();
        const diffDays = (date - previousDate) / oneDayInMs;
        const value = item.confirmedCases;
        const previousValue = previousCase.confirmedCases;
        const diffCases = value - previousValue;
        const averageDailyChange = diffCases / diffDays;

        averages.push(averageDailyChange);
      }
    });
    console.log({averages, confirmedCases});
    const avgDailyChangeInLastWeek = Math.round(
      averages.reduce((total, nextValue) => (total += nextValue), 0) /
        averages.length,
    );

    return avgDailyChangeInLastWeek;
  },
);
