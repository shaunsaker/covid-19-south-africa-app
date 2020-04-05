import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import TabBar, {Tab} from '../TabBar';
import {colors} from '../../../styleConstants';

const tabs: Tab[] = [
  {
    label: 'Confirmed Cases',
    isActive: true,
  },
  {
    label: 'Deaths',
    isActive: false,
  },
];
const handleTabPress = (tab: Tab) => console.log(`${tab.label} pressed.`);
const defaultProps = {
  tabs,
  handleTabPress,
};

storiesOf('Components|TabBar', module)
  .addDecorator((storyFn: any) => (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: colors.primary,
      }}>
      {storyFn()}
    </View>
  ))
  .add('default', () => <TabBar {...defaultProps} />);
