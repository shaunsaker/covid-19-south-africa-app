import {ApplicationState} from '../reducers';

export const sideMenuIsOpenSelector = (state: ApplicationState) =>
  state.sideMenu.isOpen;
