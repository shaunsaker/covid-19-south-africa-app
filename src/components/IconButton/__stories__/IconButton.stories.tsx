import React from 'react';
import {storiesOf} from '@storybook/react-native';

import IconButton from '../IconButton';
import Background from '../../Background';
import CenterView from '../../CenterView';

const handlePress = () => console.log('Pressed');

storiesOf('Components|IconButton', module)
  .addDecorator((storyFn: any) => (
    <Background>
      <CenterView>{storyFn()}</CenterView>
    </Background>
  ))
  .add('default', () => (
    <IconButton iconName="menu" handlePress={handlePress} />
  ));
