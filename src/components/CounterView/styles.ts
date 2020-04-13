import styled from 'styled-components/native';

import {
  colors,
  rhythm,
  getTextShadow,
  getMobileTextShadow,
} from '../../styleConstants';

export const Container = styled.View`
  padding: 0 0 ${rhythm.vt}px;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 20px;
  color: ${colors.secondaryText};
  margin-bottom: ${rhythm.vt}px;
  text-shadow: ${getTextShadow('dark')};
`;

const SUBTITLE_SIZE = 90;

interface CounterContainerProps {
  subtitle: string;
}

export const CounterContainer = styled.View<CounterContainerProps>`
  padding: ${({subtitle}) =>
    subtitle ? `0 ${SUBTITLE_SIZE + rhythm.hz / 2}px;` : '0'};
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
  subtitleContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: SUBTITLE_SIZE,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.primaryLight,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    paddingVertical: rhythm.vt / 2,
    paddingHorizontal: rhythm.hz / 2,
  },
  sourceButtonPlaceholder: {
    height: 19.5,
  },
};
