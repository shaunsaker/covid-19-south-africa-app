import styled from 'styled-components/native';

import {
  colors,
  rhythm,
  getTextShadow,
  getMobileTextShadow,
} from '../../styleConstants';
import {Platform} from 'react-native';

export const Container = styled.View`
  padding: 0 ${rhythm.vt}px;
  justify-content: center;
  align-items: center;
`;

export const CounterContainer = styled.View`
  align-items: center;
  margin-bottom: ${rhythm.vt / 2}px;
`;

/*
 * Controls layout so that empty state does not affect page layout
 */
export const SubtitleWrapper = styled.View`
  height: 26px;
  margin-bottom: ${Platform.OS === 'android'
    ? 4
    : rhythm.vt}px; /* compensate for line height of title text on android */
`;

export const SubtitleContainer = styled.View`
  background-color: ${colors.primaryMedium};
  border-radius: 10px;
  padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
  justify-content: center;
`;

export const SubtitleText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: ${colors.primaryText};
  text-shadow: ${getTextShadow('dark')};
`;

export const FooterText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: ${colors.secondaryText};
  margin-bottom: ${rhythm.vt}px;
  text-shadow: ${getTextShadow('dark')};
`;

export const SourceButton = styled.TouchableOpacity``;

export const SourceText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: ${colors.secondary};
  text-shadow: ${getTextShadow('dark')};
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: ${Platform.OS === 'android' ? 4 : 0};
  bottom: 0;
  right: ${rhythm.hz * -2}px;
  justify-content: flex-start;
`;

export default {
  animator: {
    alignItems: 'center',
  },
  counter: {
    fontFamily: 'Roboto-Bold',
    fontSize: 64,
    color: colors.primaryText,
    ...getMobileTextShadow('dark'),
  },
  sourceButtonPlaceholder: {
    height: 19.5,
  },
};
