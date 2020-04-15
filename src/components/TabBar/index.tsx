import React from 'react';
import {useSelector} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import TabBar, {TabUIProps} from './TabBar';
import {tabs as TABS} from '../../config';

import {getCurrentScene} from '../../store/selectors';

const TabBarContainer = () => {
  const currentScene = useSelector(getCurrentScene);
  const tabs: TabUIProps[] = TABS.map((item) => {
    return {
      ...item,
      isActive: item.sceneKey === currentScene,
    };
  });
  const onTabPress = (tab: TabUIProps) => {
    Actions[tab.sceneKey]();
  };

  return <TabBar tabs={tabs} handleTabPress={onTabPress} />;
};

export default TabBarContainer;
