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
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.primaryLight,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    paddingLeft: 2,
  },
  sourceButtonPlaceholder: {
    height: 19.5,
  },
};
