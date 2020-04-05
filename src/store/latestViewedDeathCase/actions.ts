import {action} from 'typesafe-actions';

import {LatestViewedDeathCase} from './types';
import {DeathCase} from '../types';

export const setLatestViewedDeathCase = (deathCase: DeathCase) =>
  action(LatestViewedDeathCase.SET_LATEST_VIEWED_DEATH_CASE, {
    deathCase,
  });
