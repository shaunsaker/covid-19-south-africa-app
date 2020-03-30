import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';

import styles, {Container, VersionText} from './styles';
import {colors} from '../../styleConstants';

import Background from '../Background';
import Button from '../Button';

interface Props {
  version: string;
  handleGetInTouch: () => void;
}

const SideMenu = ({version, handleGetInTouch}: Props) => {
  return (
    <Background>
      <Container>
        <Button onPress={handleGetInTouch}>GET IN TOUCH</Button>

        <LinearGradient
          colors={[colors.primary, colors.primaryMedium]}
          style={styles.versionWrapper}>
          <NeomorphBox inner style={styles.versionContainer}>
            <VersionText>{version}</VersionText>
          </NeomorphBox>
        </LinearGradient>
      </Container>
    </Background>
  );
};

export default SideMenu;
