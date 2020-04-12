import styled from 'styled-components/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Dimensions} from 'react-native';

import {colors, rhythm, getTextShadow, sizes} from '../../styleConstants';
import {isMobile} from '../../utils';

/*
 * Calculate the minimum timeline height in case of landscape on mobile
 * Take the smallest side and subtract the height of the elements on the page
 */
const {width, height} = Dimensions.get('window');
const smallestSide = width < height ? width : height;
const statusBarHeight = getStatusBarHeight();
const bottomSpace = getBottomSpace();
const MIN_TIMELINE_HEIGHT = isMobile()
  ? smallestSide -
    sizes.headerHeight -
    sizes.tabBarHeight -
    statusBarHeight -
    bottomSpace -
    sizes.timelineXAxis
  : 'auto';

export const Container = styled.View`
  align-items: center;
  padding: ${rhythm.vt * 2}px 0;
  flex: 1;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 20px;
  color: ${colors.secondaryText};
  margin-bottom: ${rhythm.vt}px;
  text-shadow: ${getTextShadow('dark')};
`;

export const LineChartContainer = styled.View`
  flex: 1;
  align-self: stretch;
`;

export const LineChartRowContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const LABEL_FONT_SIZE = 10;

export const YAxisLabelText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: ${LABEL_FONT_SIZE}px;
  color: ${colors.secondaryText};
  text-shadow: ${getTextShadow('dark')};
  transform: rotate(-90deg);
  margin-left: -${rhythm.vt * 2}px;
`;

export default {
  contentContainerWrapper: {
    flex: 1,
    borderRadius: sizes.borderRadius,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    minHeight: MIN_TIMELINE_HEIGHT, // fix landscape on mobile
  },
  lineChart: {},
  lineChartSvg: {
    stroke: colors.secondary,
    strokeWidth: 4,
  },
  yAxis: {
    marginRight: rhythm.hz / 4,
    minWidth: 28,
    alignItems: 'flex-end',
  },
  yAxisSvg: {
    fill: colors.secondaryText,
    fontSize: LABEL_FONT_SIZE,
  },
  xAxis: {
    marginTop: rhythm.vt,
    height: sizes.timelineXAxis,
  },
  xAxisSvg: {
    fill: colors.secondaryText,
    fontSize: LABEL_FONT_SIZE,
  },
  gridSvg: {
    stroke: colors.primaryLight,
  },
};
