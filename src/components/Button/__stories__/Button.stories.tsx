import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Button from '../Button';

const children = 'GET IN TOUCH';
const handlePress = () => console.log('Pressed');
const defaultProps = {
  round: false,
  children,
  handlePress,
};

storiesOf('Components|Button', module).add('default', () => (
  <Button {...defaultProps} />
));
