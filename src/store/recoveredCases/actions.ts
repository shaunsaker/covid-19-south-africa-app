import {action} from 'typesafe-actions';

import {RecoveredCasesActionTypes, RecoveredCase} from './types';

export const getRecoveredCases = () =>
  action(RecoveredCasesActionTypes.GET_RECOVERED_CASES);

export const setRecoveredCases = (recoveredCases: RecoveredCase[]) =>
  action(RecoveredCasesActionTypes.SET_RECOVERED_CASES, {recoveredCases});

export const setRecoveredCasesLoading = (loading: boolean) =>
  action(RecoveredCasesActionTypes.SET_RECOVERED_CASES_LOADING, {loading});

export const setRecoveredCasesSynced = (synced: boolean) =>
  action(RecoveredCasesActionTypes.SET_RECOVERED_CASES_SYNCED, {synced});
