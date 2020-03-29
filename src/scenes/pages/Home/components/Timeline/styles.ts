import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {
  colors,
  rhythm,
  getTextShadow,
  shadows,
} from '../../../../../styleConstants';

export const Container = styled.View`
  background-color: ${colors.primary};
  align-items: center;
  padding: ${rhythm.vt * 2}px 0;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 24px;
  color: ${colors.whiteText};
  margin-bottom: ${rhythm.vt * 2}px;
  text-shadow: ${getTextShadow('dark')};
`;

export default {
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: wp('100%') - 2 * rhythm.hz,
    height: 234, // TODO:
    ...shadows,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
