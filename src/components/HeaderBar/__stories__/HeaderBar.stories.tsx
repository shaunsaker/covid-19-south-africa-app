import React, {ReactNode} from 'react';
import {storiesOf} from '@storybook/react-native';

import HeaderBar from '../HeaderBar';
import Background from '../../Background';
import {countriesImagesUrl} from '../../../config';

const handleMenuPress = () => console.log('Menu pressed');
const handleClosePress = () => console.log('Close pressed');
const handleCountryPress = () => console.log('Country pressed');
const defaultProps = {
  title: 'Confirmed Cases',
  handleMenuPress,
  handleClosePress,
  handleCountryPress,
};

storiesOf('Components|HeaderBar', module)
  .addDecorator((story: () => ReactNode) => <Background>{story()}</Background>)
  .add('default', () => <HeaderBar {...defaultProps} showMenuIcon />)
  .add('with close icon', () => (
    <HeaderBar {...defaultProps} showMenuIcon={false} showCloseIcon />
  ))
  .add('with country icon', () => (
    <HeaderBar
      {...defaultProps}
      showCountryIcon={`${countriesImagesUrl}/za.png`}
    />
  ));
