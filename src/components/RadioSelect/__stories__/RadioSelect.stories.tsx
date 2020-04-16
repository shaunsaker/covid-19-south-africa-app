import React, {ReactNode} from 'react';
import {storiesOf} from '@storybook/react-native';

import RadioSelect, {RadioSelectOption} from '../RadioSelect';
import Background from '../../Background';
import CenterView from '../../CenterView';

const options: RadioSelectOption[] = [
  {
    label: 'Cumulative',
    isSelected: true,
  },
  {
    label: 'Per Day',
    isSelected: false,
  },
];
const handleSelectOption = (option: RadioSelectOption) =>
  console.log(option.label);
const defaultProps = {
  options,
  handleSelectOption,
};

storiesOf('Component|RadioSelect', module)
  .addDecorator((story: () => ReactNode) => (
    <Background>
      <CenterView>{story()}</CenterView>
    </Background>
  ))
  .add('default', () => <RadioSelect {...defaultProps} />);
