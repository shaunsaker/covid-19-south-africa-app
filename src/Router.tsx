import React from 'react';
import {Router as RNRouter, Reducer} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';

import scenes from './scenes';

const Router = () => {
  const dispatch = useDispatch();

  const createReducer = (params: any) => {
    const defaultReducer = Reducer(params);
    return (state: any, action: any) => {
      dispatch(action);
      return defaultReducer(state, action);
    };
  };

  return <RNRouter createReducer={createReducer} scenes={scenes} />;
};

export default Router;
