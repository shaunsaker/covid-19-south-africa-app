import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';

import styles, {Container, ContentContainer, VersionText} from './styles';
import {colors} from '../../styleConstants';

import HeaderBar from '../HeaderBar';
import Button from '../Button';
import PageBg from '../PageBg';
import {ViewStyle} from 'react-native';

interface Props {
  version: string;
  style?: ViewStyle;
  handleGetInTouchPress: () => void;
}

const SideMenu = ({version, style, handleGetInTouchPress}: Props) => {
  return (
    <PageBg style={{...styles.container, ...style}}>
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
    </PageBg>
  );
};

export default SideMenu;
