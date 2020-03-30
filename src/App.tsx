import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Router, Scene, Lightbox} from 'react-native-router-flux';

import {store, persistor} from './store';

import Home from './pages/Home';

// Helper to clear local storage during development
// persistor.purge();

const App = () => {
  // console.disableYellowBox = true;
  // console.ignoredYellowBox = ['react-native BugReporting extraData:'];

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Lightbox>
            <Scene key="root" hideNavBar panHandlers={null}>
              <Scene key="login" component={Home} />
            </Scene>
          </Lightbox>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
