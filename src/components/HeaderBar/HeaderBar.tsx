import React from 'react';
import {StatusBar} from 'react-native';

import {Container, Text, LeftIconContainer, RightIconContainer} from './styles';
import {colors} from '../../styleConstants';

import IconButton from '../../components/IconButton/IconButton';

export interface HeaderBarProps {
  showMenuIcon?: boolean;
  showCloseIcon?: boolean;
  showShadow?: boolean;
  handleMenuPress: () => void;
  handleClosePress: () => void;
}

const HeaderBar = ({
  showMenuIcon = true,
  showCloseIcon,
  showShadow,
  handleMenuPress,
  handleClosePress,
}: HeaderBarProps) => {
  return (
    <Container showShadow={showShadow}>
      <StatusBar
        backgroundColor={colors.primaryLight}
        barStyle="light-content"
      />

      {showMenuIcon ? (
        <LeftIconContainer>
          <IconButton iconName="menu" handlePress={handleMenuPress} />
        </LeftIconContainer>
      ) : null}

      <Text>CVD19ZA</Text>

      {showCloseIcon ? (
        <RightIconContainer>
          <IconButton iconName="close" handlePress={handleClosePress} />
        </RightIconContainer>
      ) : null}
    </Container>
  );
};

export default HeaderBar;
