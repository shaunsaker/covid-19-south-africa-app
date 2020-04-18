import React, {ReactNode} from 'react';
import {storiesOf} from '@storybook/react-native';

import Input from '..';
import Background from '../../Background';
import CenterView from '../../CenterView';

const placeholder = 'Search countries...';
const value = '';
const handleChange = (text: string) => console.log(text);
const defaultProps = {
  iconName: 'search',
  placeholder,
  value,
  handleChange,
};

storiesOf('Components|Input', module)
  .addDecorator((story: () => ReactNode) => (
    <Background>
      <CenterView>{story()}</CenterView>
    </Background>
  ))
  .add('default', () => <Input {...defaultProps} />)
  .add('with value', () => <Input {...defaultProps} value="South Af" />);
