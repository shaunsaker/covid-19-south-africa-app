import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';

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
        <HeaderBar title="CVD19ZA" showMenuIcon={false} showCloseIcon />

        <ContentContainer>
          <Button handlePress={handleGetInTouchPress}>GET IN TOUCH</Button>

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
