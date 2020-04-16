import React from 'react';
import {storiesOf} from '@storybook/react-native';

import IconButton from '../IconButton';
import Background from '../../Background';
import CenterView from '../../CenterView';
import {countriesImagesUrl} from '../../../config';

const handlePress = () => console.log('Pressed');

storiesOf('Components|IconButton', module)
  .addDecorator((storyFn: any) => (
    <Background>
      <CenterView>{storyFn()}</CenterView>
    </Background>
  ))
  .add('default', () => (
    <IconButton iconName="menu" handlePress={handlePress} />
  ))
  .add('with image', () => (
    <IconButton
      imageUri={`${countriesImagesUrl}/za.png`}
      handlePress={handlePress}
    />
  ));
