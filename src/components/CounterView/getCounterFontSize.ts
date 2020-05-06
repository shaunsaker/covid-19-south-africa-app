import {Dimensions} from 'react-native';

export const getCounterFontSize = (value: number = 0): number => {
  const baseFontSize = 56;
  const isTablet = Dimensions.get('window').width >= 768;

  if (isTablet) {
    return baseFontSize;
  }

  const digits = value.toString().length;
  const digitsToStartScaling = 5;

  if (digits < digitsToStartScaling) {
    return baseFontSize;
  }

  // For each digit over and above 5, decrease baseFontSize by X%
  const decrementFactor = 0.1;
  const scaledFontSize =
    baseFontSize -
    baseFontSize * (digits - digitsToStartScaling) * decrementFactor;

  return scaledFontSize;
};
