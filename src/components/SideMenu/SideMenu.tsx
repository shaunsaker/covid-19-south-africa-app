import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';

import styles, {Container, ContentContainer, VersionText} from './styles';
import {colors} from '../../styleConstants';

import Background from '../Background';
import HeaderBar from '../HeaderBar';
import Button from '../Button';

interface Props {
  version: string;
  handleGetInTouchPress: () => void;
}

const SideMenu = ({version, handleGetInTouchPress}: Props) => {
  return (
    <Background>
      <Container>
        <HeaderBar showMenuIcon={false} showCloseIcon />

        <ContentContainer>
          <Button handlePress={handleGetInTouchPress}>GET IN TOUCH</Button>

          <LinearGradient
            colors={[colors.primary, colors.primaryMedium]}
            style={styles.versionWrapper}>
            <NeomorphBox inner style={styles.versionContainer}>
              <VersionText>Version: {version}</VersionText>
            </NeomorphBox>
          </LinearGradient>
        </ContentContainer>
      </Container>
    </Background>
  );
};

export default SideMenu;
