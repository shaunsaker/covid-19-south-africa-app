import {action} from 'typesafe-actions';

import {DeathCasesActionTypes, DeathCase} from './types';

export const getDeathCases = () =>
  action(DeathCasesActionTypes.GET_DEATH_CASES);

export const setDeathCases = (deathCases: DeathCase[]) =>
  action(DeathCasesActionTypes.SET_DEATH_CASES, {deathCases});

export const setDeathCasesLoading = (loading: boolean) =>
  action(DeathCasesActionTypes.SET_DEATH_CASES_LOADING, {loading});

export const setDeathCasesSynced = (synced: boolean) =>
  action(DeathCasesActionTypes.SET_DEATH_CASES_SYNCED, {synced});
