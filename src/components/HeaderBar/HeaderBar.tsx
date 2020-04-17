import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';

import {Container, Text, LeftIconContainer, RightIconContainer} from './styles';
import {colors} from '../../styleConstants';

import IconButton from '../../components/IconButton/IconButton';

export interface ContainerProps {
  title: string;
  children?: ReactNode;
  showMenuIcon?: boolean;
  showCloseIcon?: boolean;
  showCountryIcon?: string; // the uri of the country image
}

interface Props extends ContainerProps {
  handleMenuPress: () => void;
  handleClosePress: () => void;
  handleCountryPress: () => void;
}

const HeaderBar = ({
  title,
  children,
  showMenuIcon = true,
  showCloseIcon,
  showCountryIcon,
  handleMenuPress,
  handleClosePress,
  handleCountryPress,
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

      <Text>{title}</Text>

      {showCloseIcon || showCountryIcon ? (
        <RightIconContainer>
          {showCloseIcon ? (
            <IconButton iconName="close" handlePress={handleClosePress} />
          ) : (
            <IconButton
              imageUri={showCountryIcon}
              handlePress={handleCountryPress}
            />
          )}
        </RightIconContainer>
      ) : null}

      {children}
    </Container>
  );
};

export default HeaderBar;
