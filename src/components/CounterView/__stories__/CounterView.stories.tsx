import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import CounterView from '..';
import {colors} from '../../../styleConstants';

const title = 'Confirmed Cases';
const start = 0;
const end = 1170;
const subtitle = '9%';
const lastUpdated = '27 March 2020, 20h14';
const handleSourcePress = () => console.log('Source pressed');
const handleCountComplete = () => console.log('Count complete');
const defaultProps = {
  title,
  start,
  end,
  subtitle,
  lastUpdated,
  handleSourcePress,
  handleCountComplete,
};

storiesOf('Components|CounterView', module)
  .addDecorator((storyFn: any) => (
    <View style={{backgroundColor: colors.primaryLight}}>{storyFn()}</View>
  ))
  .add('default', () => <CounterView {...defaultProps} />)
  .add('loading', () => (
    <CounterView {...defaultProps} start={0} end={0} lastUpdated="" loading />
  ));
