import {ApplicationState} from '../reducers';

export const getCurrentScene = (state: ApplicationState) =>
  state.navigation.currentScene;
