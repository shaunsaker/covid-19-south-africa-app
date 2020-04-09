import {action} from 'typesafe-actions';

import {LatestViewedRecoveredCase} from './types';
import {RecoveredCase} from '../types';

export const setLatestViewedRecoveredCase = (recoveredCase: RecoveredCase) =>
  action(LatestViewedRecoveredCase.SET_LATEST_VIEWED_RECOVERED_CASE, {
    recoveredCase,
  });
