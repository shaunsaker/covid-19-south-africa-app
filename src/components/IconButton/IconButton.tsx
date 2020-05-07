import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';

import styles, {Button} from './styles';
import {colors} from '../../styleConstants';

export interface Props {
  iconName?: string;
  imageUri?: string;
  handlePress: () => void;
}

const IconButton = ({iconName, imageUri, handlePress}: Props) => {
  return (
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
          <FastImage source={{uri: imageUri}} style={styles.image} />
        ) : null}
      </Button>
    </LinearGradient>
  );
};

export default IconButton;
