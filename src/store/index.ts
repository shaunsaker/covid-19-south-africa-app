import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';

// add the middlewares
const middlewares = [];

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

if (__DEV__) {
  const loggerMiddleware = createLogger({collapsed: true});

  middlewares.push(loggerMiddleware);
}

// apply the middleware
const middleware = applyMiddleware(...middlewares);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['sideMenu', 'navigation', 'versionUpdate'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);

sagaMiddleware.run(sagas);
