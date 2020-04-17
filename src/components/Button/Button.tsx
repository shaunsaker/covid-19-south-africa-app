import React, {ReactNode} from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import {View} from 'react-native';

import styles, {Button as StyledButton, Text} from './styles';
import {colors} from '../../styleConstants';

export interface Props {
  secondary?: boolean;
  children: ReactNode;
  handlePress: () => void;
}

const Button = ({secondary, children, handlePress}: Props) => {
  return (
    <NeomorphBox
      style={{
        ...styles.buttonWrapper,
        ...(secondary && {backgroundColor: colors.primaryMedium}),
      }}>
      <View
        style={{
          ...styles.buttonContainer,
          ...(secondary && {backgroundColor: colors.primaryLight}),
        }}>
        <StyledButton onPress={handlePress} style={styles.button}>
          <Text numberOfLines={1}>{children}</Text>
        </StyledButton>
      </View>
    </NeomorphBox>
  );
};

export default Button;
