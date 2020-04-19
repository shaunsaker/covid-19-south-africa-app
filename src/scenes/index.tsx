import React from 'react';
import {Actions, Scene, Tabs} from 'react-native-router-flux';

import ConfirmedCases from './pages/ConfirmedCases';
import DeathCases from './pages/DeathCases';
import RecoveredCases from './pages/RecoveredCases';
import TestCases from './pages/TestCases';
import Countries from './pages/Countries';

const scenes = Actions.create(
  <Scene key="root" hideNavBar panHandlers={null}>
    <Tabs
      key="tabs"
      headerMode="none"
      hideTabBar
      initial={false}
      lazy
      swipeEnabled={false}
      animationEnabled={false}>
      <Scene
        key="confirmedCases"
        component={ConfirmedCases}
        type="reset"
        duration={0}
      />
      <Scene
        key="deathCases"
        component={DeathCases}
        type="reset"
        duration={0}
      />
      <Scene
        key="recoveredCases"
        component={RecoveredCases}
        type="reset"
        duration={0}
      />
      <Scene key="testCases" component={TestCases} type="reset" duration={0} />
    </Tabs>
    <Scene key="countries" component={Countries} />
  </Scene>,
);

export default scenes;
