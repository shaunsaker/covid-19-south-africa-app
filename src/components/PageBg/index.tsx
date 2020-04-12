import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ViewStyle} from 'react-native';

import styles from './styles';
import {colors} from '../../styleConstants';

interface Props {
  children?: ReactNode;
  style?: ViewStyle;
}

const PageBg = ({children, style}: Props) => {
  return (
    <LinearGradient
      colors={[colors.primaryLight, colors.primary]}
      style={{...styles.container, ...style}}>
      {children}
    </LinearGradient>
  );
};

export default PageBg;
