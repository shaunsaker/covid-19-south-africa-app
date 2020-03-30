import React, {ReactNode} from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';

import styles, {Button as StyledButton, Text} from './styles';
import {colors} from '../../styleConstants';

interface Props {
  children: ReactNode;
  handlePress: () => void;
}

const Button = ({children, handlePress}: Props) => {
  return (
    <NeomorphBox style={styles.buttonWrapper}>
      <StyledButton onPress={handlePress}>
        <LinearGradient
          colors={[colors.secondary, colors.secondaryDark]}
          start={{x: 0.2, y: 0.2}}
          end={{x: 1, y: 1}}
          style={styles.buttonContainer}>
          <Text>{children}</Text>
        </LinearGradient>
      </StyledButton>
    </NeomorphBox>
  );
};

export default Button;
