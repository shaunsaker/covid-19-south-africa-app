import {action} from 'typesafe-actions';

import {ConfirmedCasesActionTypes} from './types';

export const getConfirmedCases = () =>
  action(ConfirmedCasesActionTypes.GET_CONFIRMED_CASES);

// TODO: Args
export const setConfirmedCases = () =>
  action(ConfirmedCasesActionTypes.SET_CONFIRMED_CASES);
