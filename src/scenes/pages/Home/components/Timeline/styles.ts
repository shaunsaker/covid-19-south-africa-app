import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  colors,
  rhythm,
  getTextShadow,
  shadows,
} from '../../../../../styleConstants';

export const Container = styled.View`
  flex: 1; /* needed for height calculation of contentContainer */
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
  contentContainerWrapper: {
    flex: 1 /* needed for height calculation of contentContainer */,
    width: '100%',
  },
  contentContainer: {
    backgroundColor: colors.primary,
    ...shadows,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineChart: {},
  lineChartSvg: {
    stroke: colors.secondary,
    strokeWidth: 4,
  },
};
