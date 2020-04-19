import React from 'react';
import {TextInputProperties} from 'react-native';
import {NeomorphBox} from 'react-native-neomorph-shadows';

import styles, {StyledTextInput, StyledIcon} from './styles';
import {colors} from '../../styleConstants';

export interface InputProps extends TextInputProperties {
  iconName?: string;
  handleChange: (text: string) => void;
}

const Input = ({
  iconName,
  placeholder = '',
  value,
  handleChange,
}: InputProps) => {
  return (
    <NeomorphBox inner style={styles.container}>
      {iconName ? <StyledIcon name={iconName} /> : null}

      <StyledTextInput
        placeholder={placeholder}
        placeholderTextColor={colors.secondaryText}
        value={value}
        onChangeText={handleChange}
      />
    </NeomorphBox>
  );
};

export default Input;
