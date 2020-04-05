import React from 'react';
import {useSelector} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import TabBar from './TabBar';
import TABS from './tabs';

import {getCurrentScene} from '../../store/selectors';

export interface Tab {
  label: string;
  sceneKey: string;
}

const TabBarContainer = () => {
  const currentScene = useSelector(getCurrentScene);
  const tabs: Tab[] = TABS.map((item) => {
    return {
      ...item,
      isActive: item.sceneKey === currentScene,
    };
  });
  const onTabPress = (tab: Tab) => {
    Actions[tab.sceneKey]();
  };

  return <TabBar tabs={tabs} handleTabPress={onTabPress} />;
};

export default TabBarContainer;
