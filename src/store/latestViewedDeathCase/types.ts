import {DeathCase} from '../types';

export enum LatestViewedDeathCase {
  SET_LATEST_VIEWED_DEATH_CASE = '@@lastViewedDeathCase/SET_LATEST_VIEWED_DEATH_CASE',
}

export type LatestViewedDeathCaseState = DeathCase | null;
