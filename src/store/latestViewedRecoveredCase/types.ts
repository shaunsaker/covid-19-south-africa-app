import {RecoveredCase} from '../types';

export enum LatestViewedRecoveredCase {
  SET_LATEST_VIEWED_RECOVERED_CASE = '@@lastViewedRecoveredCase/SET_LATEST_VIEWED_RECOVERED_CASE',
}

export type LatestViewedRecoveredCaseState = RecoveredCase | null;
