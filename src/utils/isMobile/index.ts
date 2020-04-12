import {Dimensions} from 'react-native';

const smallestTabletWidth = 768;
const smallestTabletHeight = 1024;
const SMALLEST_TABLET_AREA = smallestTabletWidth * smallestTabletHeight; // using area we don't need to worry about orientation

export const isMobile = () => {
  const {width, height} = Dimensions.get('window');

  if (width * height < SMALLEST_TABLET_AREA) {
    return true;
  }

  return false;
};
