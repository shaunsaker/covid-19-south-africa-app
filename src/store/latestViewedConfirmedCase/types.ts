import {ConfirmedCase} from '../types';

export enum LatestViewedConfirmedCase {
  SET_LATEST_VIEWED_CONFIRMED_CASE = '@@lastViewedConfirmedCase/SET_LATEST_VIEWED_CONFIRMED_CASE',
}

export type LatestViewedConfirmedCaseState = ConfirmedCase | null;
