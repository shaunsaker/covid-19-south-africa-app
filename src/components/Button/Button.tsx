import React, {ReactNode} from 'react';
import {View} from 'react-native';

import styles, {
  Button as StyledButton,
  Text,
  LeftComponentContainer,
  RightComponentContainer,
} from './styles';
import {colors} from '../../styleConstants';

export interface Props {
  secondary?: boolean;
  children: ReactNode;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  handlePress: () => void;
}

const Button = ({
  secondary,
  children,
  leftComponent,
  rightComponent,
  handlePress,
}: Props) => {
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
          withAdditionalComponent={Boolean(leftComponent || rightComponent)}
          onPress={handlePress}>
          <Text numberOfLines={1}>{children}</Text>
        </StyledButton>
      </View>

      {leftComponent ? (
        <LeftComponentContainer>{leftComponent}</LeftComponentContainer>
      ) : null}

      {rightComponent ? (
        <RightComponentContainer>{rightComponent}</RightComponentContainer>
      ) : null}
    </View>
  );
};

export default Button;
