import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';

import styles, {
  Container,
  ContentContainer,
  ButtonsContainer,
  ButtonContainer,
  VersionText,
} from './styles';
import {colors} from '../../styleConstants';

import Background from '../Background';
import HeaderBar from '../HeaderBar';
import Button from '../Button';

interface Props {
  version: string;
  handleSharePress: () => void;
  handleGetInTouchPress: () => void;
}

const SideMenu = ({
  version,
  handleSharePress,
  handleGetInTouchPress,
}: Props) => {
  return (
    <Background>
      <Container>
        <HeaderBar title="CVD19ZA" showMenuIcon={false} showCloseIcon />

        <ContentContainer>
          <ButtonsContainer>
            <ButtonContainer>
              <Button handlePress={handleSharePress}>SHARE</Button>
            </ButtonContainer>

            <ButtonContainer>
              <Button secondary handlePress={handleGetInTouchPress}>
                GET IN TOUCH
              </Button>
            </ButtonContainer>
          </ButtonsContainer>

          <LinearGradient
            colors={[colors.primary, colors.primaryMedium]}
            style={styles.versionWrapper}>
            <View style={styles.versionContainer}>
              <VersionText>Version: {version}</VersionText>
            </View>
          </LinearGradient>
        </ContentContainer>
      </Container>
    </Background>
  );
};

export default SideMenu;
