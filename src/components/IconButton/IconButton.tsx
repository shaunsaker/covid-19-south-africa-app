import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';

import styles, {Button} from './styles';
import {colors} from '../../styleConstants';

export interface Props {
  iconName?: string;
  imageUri?: string;
  handlePress: () => void;
}

const IconButton = ({iconName, imageUri, handlePress}: Props) => {
  return (
    <NeomorphBox style={styles.iconButton}>
      <LinearGradient
        colors={[colors.primaryLight, colors.primaryMedium]}
        start={{x: 0.2, y: 0.2}}
        end={{x: 1, y: 1}}
        style={styles.iconContainer}>
        <Button
          hitSlop={{top: 20, right: 20, bottom: 20, left: 20}}
          onPress={handlePress}>
          {iconName ? (
            <Icon name={iconName} style={styles.icon} />
          ) : imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} />
          ) : null}
        </Button>
      </LinearGradient>
    </NeomorphBox>
  );
};

export default IconButton;
