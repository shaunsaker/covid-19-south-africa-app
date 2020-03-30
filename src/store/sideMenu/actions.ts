import {action} from 'typesafe-actions';

import {SideMenuActionTypes} from './types';

export const setSideMenu = (isOpen: boolean) =>
  action(SideMenuActionTypes.SET_SIDE_MENU, {isOpen});
