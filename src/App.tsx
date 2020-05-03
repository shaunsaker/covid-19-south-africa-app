import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './store';

import Router from './Router';
import SideMenu from './components/SideMenu';
import NotificationsHandler from './components/NotificationsHandler';
import CodePushHandler from './components/CodePushHandler';
import AndroidBackHandler from './components/AndroidBackHandler';
import DataSyncHandler from './components/DataSyncHandler';
import RequestUpdateHandler from './components/RequestUpdateHandler';

// Helper to clear local storage during development
// if (__DEV__) {
//   persistor.purge();
// }

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SideMenu>
          <Router />
        </SideMenu>

        <NotificationsHandler />
        <CodePushHandler />
        <AndroidBackHandler />
        <DataSyncHandler />
        <RequestUpdateHandler />
      </PersistGate>
    </Provider>
  );
};

export default App;
