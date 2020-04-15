import styled from 'styled-components/native';

import {
  colors,
  rhythm,
  getTextShadow,
  getMobileTextShadow,
} from '../../styleConstants';

export const Container = styled.View`
  padding: 0 ${rhythm.vt}px;
  justify-content: center;
  align-items: center;
`;

interface CounterContainerProps {
  subtitle?: string;
}

export const CounterContainer = styled.View<CounterContainerProps>`
  align-items: center;
`;

const SUBTITLE_HEIGHT = 26;

export const SubtitleContainer = styled.View<CounterContainerProps>`
  background-color: ${colors.primaryMedium};
  border-radius: 10px;
  padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
  justify-content: center;
  height: ${SUBTITLE_HEIGHT}px;
  margin-bottom: ${rhythm.vt}px;
`;

export const SubtitlePlaceholder = styled.View<CounterContainerProps>`
  height: ${SUBTITLE_HEIGHT}px;
  margin-bottom: ${rhythm.vt}px;
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
  width: 148px;
  height: 75.5px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: ${rhythm.vt}px;
`;

export default {
  animator: {
    alignItems: 'center',
  },
  counter: {
    fontFamily: 'Roboto-Bold',
    fontSize: 64,
    color: colors.primaryText,
    marginBottom: rhythm.vt / 2,
    ...getMobileTextShadow('dark'),
  },
  sourceButtonPlaceholder: {
    height: 19.5,
  },
};
