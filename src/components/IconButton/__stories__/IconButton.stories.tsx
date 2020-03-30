import React from 'react';
import {storiesOf} from '@storybook/react-native';

import IconButton from '../IconButton';

const handlePress = () => console.log('Pressed');

storiesOf('Components|IconButton', module).add('default', () => (
  <IconButton iconName="menu" handlePress={handlePress} />
));
