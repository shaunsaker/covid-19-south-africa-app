import React, {ReactNode} from 'react';
import {View} from 'react-native';

import styles, {
  Button as StyledButton,
  Text,
  LeftComponentContainer,
} from './styles';
import {colors} from '../../styleConstants';

export interface Props {
  secondary?: boolean;
  children: ReactNode;
  leftComponent?: ReactNode;
  handlePress: () => void;
}

const Button = ({secondary, children, leftComponent, handlePress}: Props) => {
  return (
    <View
      style={{
        ...styles.buttonWrapper,
        ...(secondary && {backgroundColor: colors.primaryMedium}),
      }}>
      <View
        style={{
          ...styles.buttonContainer,
          ...(secondary && {backgroundColor: colors.primaryLight}),
        }}>
        <StyledButton
          withLeftComponent={Boolean(leftComponent)}
          onPress={handlePress}>
          <Text numberOfLines={1}>{children}</Text>
        </StyledButton>
      </View>

      {leftComponent ? (
        <LeftComponentContainer>{leftComponent}</LeftComponentContainer>
      ) : null}
    </View>
  );
};

export default Button;
