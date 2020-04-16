import React from 'react';
import {storiesOf} from '@storybook/react-native';

import CounterView from '..';
import Background from '../../Background/Background';
import CenterView from '../../CenterView';

const title = 'Confirmed Cases';
const start = 0;
const end = 1170;
const subtitle = '99% of closed cases';
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
    <Background>
      <CenterView>{storyFn()}</CenterView>
    </Background>
  ))
  .add('default', () => <CounterView {...defaultProps} />)
  .add('no subtitle', () => (
    <CounterView {...defaultProps} subtitle={undefined} />
  ))
  .add('loading', () => (
    <CounterView {...defaultProps} start={1234} end={1234} loading />
  ));
