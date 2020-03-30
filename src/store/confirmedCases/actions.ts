import {action} from 'typesafe-actions';

import {ConfirmedCasesActionTypes, ConfirmedCase} from './types';

export const getConfirmedCases = () =>
  action(ConfirmedCasesActionTypes.GET_CONFIRMED_CASES);

export const setConfirmedCases = (confirmedCases: ConfirmedCase[]) =>
  action(ConfirmedCasesActionTypes.SET_CONFIRMED_CASES, {confirmedCases});
