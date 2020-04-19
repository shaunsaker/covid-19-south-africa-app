import {action} from 'typesafe-actions';

import {LatestViewedConfirmedCase} from './types';
import {ConfirmedCase} from '../types';

export const setLatestViewedConfirmedCase = (
  confirmedCase: ConfirmedCase | null,
) =>
  action(LatestViewedConfirmedCase.SET_LATEST_VIEWED_CONFIRMED_CASE, {
    confirmedCase,
  });
