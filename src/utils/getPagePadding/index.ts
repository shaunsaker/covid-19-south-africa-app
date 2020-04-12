import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';

import {Orientation} from '../../components/useOrientation';
import {isMobile} from '../../utils/isMobile';

export const getPagePadding = (orientation: Orientation) => {
  const paddingTop =
    (Platform.OS === 'ios' && isMobile() && orientation === 'PORTRAIT') ||
    !isMobile()
      ? getStatusBarHeight()
      : 0;

  return {
    paddingTop,
    paddingBottom: getBottomSpace(),
  };
};
