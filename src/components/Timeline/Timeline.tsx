import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import {LayoutChangeEvent} from 'react-native';
import {LineChart, YAxis, XAxis, Grid} from 'react-native-svg-charts';
import LinearGradient from 'react-native-linear-gradient';
import * as scale from 'd3-scale';
import moment from 'moment';
import {
  Defs,
  LinearGradient as LinearGradientSvg,
  Stop,
} from 'react-native-svg';

import styles, {
  Container,
  Text,
  LineChartContainer,
  LineChartRowContainer,
  YAxisLabelText,
} from './styles';
import {rhythm, colors} from '../../styleConstants';
import {Props as ContainerProps} from '.';

interface Props extends ContainerProps {
  width: number;
  height: number;
  handleLayout: (event: LayoutChangeEvent) => void;
}

const Timeline = ({width, height, data = [], handleLayout}: Props) => {
  const contentInset = {
    top: rhythm.vt * 2,
    bottom: rhythm.vt * 2,
    left: rhythm.hz,
    right: rhythm.hz * 2,
  };

  const Gradient = () => (
    <Defs key="gradient">
      <LinearGradientSvg id="gradient">
        <Stop offset="0%" stopColor={colors.secondaryLight} />
        <Stop offset="100%" stopColor={colors.secondary} />
      </LinearGradientSvg>
    </Defs>
  );

  return (
    <Container>
      <Text>Timeline</Text>

      <LineChartContainer>
        <LineChartRowContainer>
          <YAxisLabelText>Cases</YAxisLabelText>

          <YAxis
            data={data.map(({value}) => value)}
            formatLabel={(value) => {
              /*
               * If any of the data values are above 10000, format all of them to Xk
               */

              if (data.filter((item) => item.value >= 10000).length) {
                return `${Math.floor(value / 1000)}k`;
              }

              return value;
            }}
            contentInset={contentInset}
            style={styles.yAxis}
            svg={styles.yAxisSvg}
            numberOfTicks={6}
          />

          <LinearGradient
            onLayout={handleLayout}
            colors={[colors.primary, colors.primaryMedium]}
            style={styles.contentContainerWrapper}>
            <NeomorphBox
              inner
              style={{...styles.contentContainer, width, height}}>
              <LineChart
                data={data}
                yAccessor={({item}) => item.value}
                contentInset={contentInset}
                animate
                style={{
                  ...styles.lineChart,
                  width,
                  height,
                }}
                svg={{...styles.lineChartSvg, stroke: 'url(#gradient)'}}>
                <Grid direction="BOTH" svg={styles.gridSvg} />
                <Gradient />
              </LineChart>
            </NeomorphBox>
          </LinearGradient>
        </LineChartRowContainer>

        <XAxis
          data={data}
          xAccessor={({item}) => item.date}
          formatLabel={(value: Date) => moment(value).format('MMM D')}
          numberOfTicks={4}
          scale={scale.scaleTime}
          contentInset={{
            left: 13 + contentInset.left + rhythm.hz,
            right: contentInset.right,
          }}
          svg={styles.xAxisSvg}
          style={styles.xAxis}
        />
      </LineChartContainer>
    </Container>
  );
};

export default Timeline;
