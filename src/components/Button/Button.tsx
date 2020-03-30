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
      <LinearGradient
        colors={[colors.primaryLight, colors.primaryMedium]}
        start={{x: 0.2, y: 0.2}}
        end={{x: 1, y: 1}}
        style={styles.buttonContainer}>
        <StyledButton onPress={handlePress}>
          <Text>{children}</Text>
        </StyledButton>
      </LinearGradient>
    </NeomorphBox>
  );
};

export default Button;
