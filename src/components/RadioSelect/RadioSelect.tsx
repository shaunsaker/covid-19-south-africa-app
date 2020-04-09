import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';

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
            onPress={() => handleSelectOption(option)}>
            <OptionText isSelected={isSelected}>{label}</OptionText>
          </OptionContainer>
        );

        if (isSelected) {
          return (
            <NeomorphBox inner style={styles.selectedOptionContainer}>
              {children}
            </NeomorphBox>
          );
        }

        return children;
      })}
    </Container>
  );
};

export default RadioSelect;
