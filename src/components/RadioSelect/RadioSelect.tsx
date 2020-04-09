import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';

import styles, {OptionContainer, OptionText} from './styles';
import {colors} from '../../styleConstants';

export interface RadioSelectOption {
  label: string;
  isSelected: boolean;
}

export interface RadioSelectProps {
  options: RadioSelectOption[];
  handleSelectOption: (option: RadioSelectOption) => void;
}

const RadioSelect = ({options, handleSelectOption}: RadioSelectProps) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryMedium]}
      style={styles.wrapper}>
      <NeomorphBox inner style={styles.container}>
        {options.map((option) => {
          const {label, isSelected} = option;

          return (
            <OptionContainer
              key={label}
              isSelected={isSelected}
              onPress={() => handleSelectOption(option)}>
              <OptionText isSelected={isSelected}>{label}</OptionText>
            </OptionContainer>
          );
        })}
      </NeomorphBox>
    </LinearGradient>
  );
};

export default RadioSelect;
