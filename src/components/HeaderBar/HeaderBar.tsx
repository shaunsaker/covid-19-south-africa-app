import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import {StatusBar} from 'react-native';

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
            <Icon name="menu" style={styles.icon} />
          </NeomorphBox>
        </IconButton>
      </IconContainer>

      <Text>CVD19ZA</Text>

      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
    </Container>
  );
};

export default HeaderBar;
