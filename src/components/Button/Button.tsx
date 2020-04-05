import React, {ReactNode} from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import {View} from 'react-native';

import styles, {Button as StyledButton, Text} from './styles';

export interface Props {
  children: ReactNode;
  handlePress: () => void;
}

const Button = ({children, handlePress}: Props) => {
  return (
    <NeomorphBox style={styles.buttonWrapper}>
      <View style={styles.buttonContainer}>
        <StyledButton onPress={handlePress} style={styles.button}>
          <Text>{children}</Text>
        </StyledButton>
      </View>
    </NeomorphBox>
  );
};

export default Button;
