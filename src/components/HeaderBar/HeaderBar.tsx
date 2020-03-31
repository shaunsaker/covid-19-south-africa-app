import React from 'react';
import {StatusBar} from 'react-native';

import {Container, Text, LeftIconContainer, RightIconContainer} from './styles';
import {colors} from '../../styleConstants';

import IconButton from '../../components/IconButton/IconButton';

export interface ContainerProps {
  showMenuIcon?: boolean;
  showCloseIcon?: boolean;
}

interface Props extends ContainerProps {
  handleMenuPress: () => void;
  handleClosePress: () => void;
}

const HeaderBar = ({
  showMenuIcon = true,
  showCloseIcon,
  handleMenuPress,
  handleClosePress,
}: Props) => {
  return (
    <Container>
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
