import React from 'react';
import {storiesOf} from '@storybook/react-native';

import HeaderBar from '../HeaderBar';

const handleMenuPress = () => console.log('Menu pressed');
const handleClosePress = () => console.log('Close pressed');
const defaultProps = {
  handleMenuPress,
  handleClosePress,
};

storiesOf('Components|HeaderBar', module)
  .add('default', () => <HeaderBar {...defaultProps} showMenuIcon />)
  .add('with close icon', () => <HeaderBar {...defaultProps} showCloseIcon />);
