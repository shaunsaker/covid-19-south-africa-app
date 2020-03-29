import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NeomorphBox} from 'react-native-neomorph-shadows';

import styles, {Container, Text, IconContainer, IconButton} from './styles';

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
    </Container>
  );
};

export default HeaderBar;
