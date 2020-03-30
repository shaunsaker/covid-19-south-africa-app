import {Reducer} from 'redux';
import {SideMenuActionTypes, SideMenuState} from './types';

export const initialState: SideMenuState = {
  isOpen: false,
};

const reducer: Reducer<SideMenuState> = (state = initialState, action) => {
  switch (action.type) {
    case SideMenuActionTypes.SET_SIDE_MENU: {
      return {...state, isOpen: action.payload.isOpen};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
