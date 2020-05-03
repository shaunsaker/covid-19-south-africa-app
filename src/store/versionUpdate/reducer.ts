import {Reducer} from 'redux';
import {VersionUpdateState, VersionUpdateTypes} from './types';

export const initialState: VersionUpdateState = null;

const reducer: Reducer<VersionUpdateState> = (state = initialState, action) => {
  switch (action.type) {
    case VersionUpdateTypes.SET_VERSION_UPDATE: {
      return action.payload.versionUpdate;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
