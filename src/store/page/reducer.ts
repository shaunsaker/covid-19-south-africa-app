import {Reducer} from 'redux';
import {PageActionTypes, PageState} from './types';

export const initialState: PageState = {
  hasScrolled: false,
};

const reducer: Reducer<PageState> = (state = initialState, action) => {
  switch (action.type) {
    case PageActionTypes.SET_HAS_SCROLLED: {
      return {...state, hasScrolled: action.payload.hasScrolled};
    }

    default: {
      return state;
    }
  }
};

export default reducer;
