import React, {ReactNode} from 'react';
import {LayoutChangeEvent, View} from 'react-native';
import {LineChart, YAxis, XAxis, Grid} from 'react-native-svg-charts';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {
  Defs,
  LinearGradient as LinearGradientSvg,
  Stop,
} from 'react-native-svg';

import styles, {
  Container,
  LineChartContainer,
  LineChartRowContainer,
  YAxisLabelText,
} from './styles';
import {rhythm, colors} from '../../styleConstants';
import {TimelineData} from '../../store/types';

interface Props {
  width: number;
  height: number;
  data: TimelineData;
  trendlineData?: TimelineData;
  children?: ReactNode;
  handleLayout: (event: LayoutChangeEvent) => void;
}

const Timeline = ({
  width,
  height,
  children,
  data = [],
  trendlineData = [],
  handleLayout,
}: Props) => {
  const contentInset = {
    top: rhythm.vt * 2,
    bottom: rhythm.vt * 2,
    left: rhythm.hz,
    right: rhythm.hz,
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
      {children}

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
            colors={[colors.primary, colors.primaryMedium]}
            style={styles.contentContainer}>
            <View
              onLayout={handleLayout}
              style={styles.contentContainerWrapper}>
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

              {trendlineData ? (
                <LineChart
                  data={trendlineData}
                  yAccessor={({item}) => item.value}
                  contentInset={contentInset}
                  animate
                  style={{
                    ...styles.lineChart,
                    ...styles.trendlineLineChart,
                    width,
                    height,
                  }}
                  svg={styles.trendlineSvg}
                />
              ) : null}
            </View>
          </LinearGradient>
        </LineChartRowContainer>

        <XAxis
          data={data}
          xAccessor={({item}) => item.date}
          formatLabel={(value: Date) => moment(value).format('MMM D')}
          numberOfTicks={5}
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
