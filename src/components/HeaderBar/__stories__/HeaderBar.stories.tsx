import React from 'react';
import {storiesOf} from '@storybook/react-native';

import HeaderBar from '../HeaderBar';

const onMenuPress = () => console.log('Menu pressed');

storiesOf('Components|HeaderBar', module).add('default', () => (
  <HeaderBar handleMenuPress={onMenuPress} />
));
