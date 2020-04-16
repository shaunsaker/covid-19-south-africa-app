import React, {ReactNode} from 'react';
import {storiesOf} from '@storybook/react-native';

import HeaderBar from '../HeaderBar';
import Background from '../../Background';

const handleMenuPress = () => console.log('Menu pressed');
const handleClosePress = () => console.log('Close pressed');
const defaultProps = {
  title: 'Confirmed Cases',
  handleMenuPress,
  handleClosePress,
};

storiesOf('Components|HeaderBar', module)
  .addDecorator((story: () => ReactNode) => <Background>{story()}</Background>)
  .add('default', () => <HeaderBar {...defaultProps} showMenuIcon />)
  .add('with close icon', () => (
    <HeaderBar {...defaultProps} showMenuIcon={false} showCloseIcon />
  ));
