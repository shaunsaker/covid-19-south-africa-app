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

export const NumberText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 48px;
  color: ${colors.primaryText};
  margin-bottom: ${rhythm.vt}px;
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
  counter: {
    fontFamily: 'Roboto-Bold',
    fontSize: 64,
    color: colors.primaryText,
    marginBottom: rhythm.vt,
    ...getMobileTextShadow('dark'),
    textAlign: 'center',
  },
  sourceButtonPlaceholder: {
    height: 19.5,
  },
};
