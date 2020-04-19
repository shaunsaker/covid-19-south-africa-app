import React, {ReactNode} from 'react';
import {storiesOf} from '@storybook/react-native';

import Button from '../Button';
import Background from '../../Background';
import CenterView from '../../CenterView';
import {View} from 'react-native';

const children = 'GET IN TOUCH';
const handlePress = () => console.log('Pressed');
const defaultProps = {
  round: false,
  children,
  handlePress,
};

storiesOf('Components|Button', module)
  .addDecorator((story: () => ReactNode) => (
    <Background>
      <CenterView>{story()}</CenterView>
    </Background>
  ))
  .add('default', () => <Button {...defaultProps} />)
  .add('secondary', () => <Button {...defaultProps} secondary />)
  .add('with left component', () => (
    <Button
      {...defaultProps}
      leftComponent={
        <View style={{width: 10, height: 10, backgroundColor: 'white'}} />
      }
    />
  ))
  .add('with right component', () => (
    <Button
      {...defaultProps}
      rightComponent={
        <View style={{width: 10, height: 10, backgroundColor: 'white'}} />
      }
    />
  ));
