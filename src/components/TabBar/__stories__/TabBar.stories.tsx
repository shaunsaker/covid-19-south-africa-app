import React from 'react';
import {storiesOf} from '@storybook/react-native';

import TabBar, {TabUIProps} from '../TabBar';
import {tabs} from '../../../config';
import Background from '../../Background/Background';
import CenterView from '../../CenterView';

const TABS = tabs.map((item, index) => {
  return {
    ...item,
    isActive: Boolean(index === 0),
  };
});

const handleTabPress = (tab: TabUIProps) =>
  console.log(`${tab.label} pressed.`);
const defaultProps = {
  tabs: TABS,
  handleTabPress,
};

storiesOf('Components|TabBar', module)
  .addDecorator((storyFn: any) => (
    <Background>
      <CenterView>{storyFn()}</CenterView>
    </Background>
  ))
  .add('default', () => <TabBar {...defaultProps} />);
