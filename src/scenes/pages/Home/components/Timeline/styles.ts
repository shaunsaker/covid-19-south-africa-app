import styled from 'styled-components/native';

import {colors, rhythm, getTextShadow} from '../../../../../styleConstants';

export const Container = styled.View`
  flex: 1; /* needed for height calculation of contentContainer */
  align-items: center;
  padding: ${rhythm.vt * 2}px 0;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 24px;
  color: ${colors.secondaryText};
  margin-bottom: ${rhythm.vt * 2}px;
  text-shadow: ${getTextShadow('dark')};
`;

export default {
  contentContainerWrapper: {
    flex: 1 /* needed for height calculation of contentContainer */,
    width: '100%',
  },
  contentContainer: {
    backgroundColor: 'transparent',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 1,
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
