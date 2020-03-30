import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles, {Button} from './styles';
import {colors} from '../../styleConstants';

export interface Props {
  iconName: string;
  handlePress: () => void;
}

const IconButton = ({iconName, handlePress}: Props) => {
  return (
    <NeomorphBox style={styles.iconButton}>
      <LinearGradient
        colors={[colors.primaryLight, colors.primaryMedium]}
        start={{x: 0.2, y: 0.2}}
        end={{x: 1, y: 1}}
        style={styles.iconContainer}>
        <Button onPress={handlePress}>
          <Icon name={iconName} style={styles.icon} />
        </Button>
      </LinearGradient>
    </NeomorphBox>
  );
};

export default IconButton;
