import React, {ReactNode} from 'react';
import {storiesOf} from '@storybook/react-native';

import Button from '../Button';
import Background from '../../Background';
import CenterView from '../../CenterView';

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
  .add('default', () => <Button {...defaultProps} />);
