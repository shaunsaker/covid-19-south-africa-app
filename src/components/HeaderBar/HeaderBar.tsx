import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles, {Container, Text, IconContainer, IconButton} from './styles';
import {colors} from '../../styleConstants';

interface Props {
  handleMenuPress: () => void;
}

const HeaderBar = ({handleMenuPress}: Props) => {
  return (
    <Container>
      <IconContainer>
        <IconButton onPress={handleMenuPress}>
          <NeomorphBox style={styles.iconButton}>
            <LinearGradient
              colors={[colors.primaryLight, colors.primaryMedium]}
              start={{x: 0.2, y: 0.2}}
              end={{x: 1, y: 1}}
              style={styles.iconContainer}>
              <Icon name="menu" style={styles.icon} />
            </LinearGradient>
          </NeomorphBox>
        </IconButton>
      </IconContainer>

      <Text>CVD19ZA</Text>

      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
    </Container>
  );
};

export default HeaderBar;
