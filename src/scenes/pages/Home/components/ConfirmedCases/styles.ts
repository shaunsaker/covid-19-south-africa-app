import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {
  colors,
  rhythm,
  getTextShadow,
  shadows,
  getMobileTextShadow,
} from '../../../../../styleConstants';

export const Container = styled.View`
  background-color: ${colors.primary};
  align-items: center;
  padding: ${rhythm.vt * 2}px 0;
`;

export const TitleText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 24px;
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

export default {
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: wp('100%') - 2 * rhythm.hz,
    height: 234,
    ...shadows,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontFamily: 'Roboto-Bold',
    fontSize: 64,
    color: colors.primaryText,
    marginBottom: rhythm.vt,
    ...getMobileTextShadow('dark'),
  },
};
