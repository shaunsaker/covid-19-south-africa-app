import React from 'react';
import {View} from 'react-native';

import styles, {Container, OptionContainer, OptionText} from './styles';

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
    <Container>
      {options.map((option) => {
        const {label, isSelected} = option;
        const children = (
          <OptionContainer
            key={label}
            isSelected={isSelected}
            disabled={isSelected}
            onPress={() => handleSelectOption(option)}>
            <OptionText isSelected={isSelected}>{label}</OptionText>
          </OptionContainer>
        );

        if (isSelected) {
          return (
            <View key={label} style={styles.selectedOptionContainer}>
              {children}
            </View>
          );
        }

        return children;
      })}
    </Container>
  );
};

export default RadioSelect;
