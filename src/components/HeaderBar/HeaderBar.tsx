import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles, {Container, Text, IconContainer} from './styles';

interface Props {
  handleMenuPress: () => void;
}

const HeaderBar = ({handleMenuPress}: Props) => {
  return (
    <Container>
      <IconContainer onPress={handleMenuPress}>
        <Icon name="menu" style={styles.icon} />
      </IconContainer>

      <Text>CVD19ZA</Text>
    </Container>
  );
};

export default HeaderBar;
