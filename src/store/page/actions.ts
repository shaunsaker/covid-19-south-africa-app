import {action} from 'typesafe-actions';

import {PageActionTypes} from './types';

export const setHasScrolled = (hasScrolled: boolean) =>
  action(PageActionTypes.SET_HAS_SCROLLED, {hasScrolled});
