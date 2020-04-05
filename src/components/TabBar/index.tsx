import React from 'react';
import {Actions} from 'react-native-router-flux';

import TabBar from './TabBar';
import TABS from './tabs';

export interface Tab {
  label: string;
  sceneKey: string;
}

const TabBarContainer = () => {
  const tabs: Tab[] = TABS.map((item) => {
    return {
      ...item,
      isActive: item.sceneKey === Actions.currentScene,
    };
  });

  const onTabPress = (tab: Tab) => {
    Actions[tab.sceneKey]();
  };

  return <TabBar tabs={tabs} handleTabPress={onTabPress} />;
};

export default TabBarContainer;
