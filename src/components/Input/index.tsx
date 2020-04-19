import React from 'react';
import {View, TextInputProperties} from 'react-native';

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
    <View style={styles.container}>
      {iconName ? <StyledIcon name={iconName} /> : null}

      <StyledTextInput
        placeholder={placeholder}
        placeholderTextColor={colors.secondaryText}
        value={value}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default Input;
