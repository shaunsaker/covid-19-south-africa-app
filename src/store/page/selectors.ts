import {ApplicationState} from '../reducers';

export const getPageHasScrolledSelector = (state: ApplicationState) =>
  state.page.hasScrolled;
