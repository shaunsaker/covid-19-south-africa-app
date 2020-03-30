import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {colors} from '../../styleConstants';

interface Props {
  children?: ReactNode;
}

const Background = ({children}: Props) => {
  return (
    <LinearGradient
      colors={[colors.primaryLight, colors.primary]}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
};

export default Background;
