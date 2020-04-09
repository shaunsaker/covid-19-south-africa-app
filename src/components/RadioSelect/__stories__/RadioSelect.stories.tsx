import React from 'react';
import {storiesOf} from '@storybook/react-native';

import RadioSelect, {RadioSelectOption} from '../RadioSelect';

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

storiesOf('Component|RadioSelect', module).add('default', () => (
  <RadioSelect {...defaultProps} />
));
