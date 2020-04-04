import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Router, Scene, Lightbox} from 'react-native-router-flux';

import {store, persistor} from './store';

import Home from './pages/Home';
import SideMenu from './components/SideMenu';
import NotificationsHandler from './components/NotificationsHandler';
import CodePushHandler from './components/CodePushHandler';

// Helper to clear local storage during development
// if (__DEV__) {
// persistor.purge();
// }

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SideMenu>
          <Router>
            <Lightbox>
              <Scene key="root" hideNavBar panHandlers={null}>
                <Scene key="login" component={Home} />
              </Scene>
            </Lightbox>
          </Router>
        </SideMenu>

        <NotificationsHandler />
        <CodePushHandler />
      </PersistGate>
    </Provider>
  );
};

export default App;
