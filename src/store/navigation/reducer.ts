import {Reducer} from 'redux';
import {ActionConst} from 'react-native-router-flux';

import {NavigationState} from './types';

export const initialState: NavigationState = {
  currentScene: '_confirmedCases',
};

const reducer: Reducer<NavigationState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {...state, currentScene: action.routeName};

    default: {
      return state;
    }
  }
};

export default reducer;
