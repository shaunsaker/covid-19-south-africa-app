import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import {LayoutChangeEvent} from 'react-native';
import {LineChart, YAxis, XAxis, Grid} from 'react-native-svg-charts';
import LinearGradient from 'react-native-linear-gradient';
import * as scale from 'd3-scale';
import moment from 'moment';

import styles, {
  Container,
  Text,
  LineChartContainer,
  LineChartRowContainer,
  YAxisLabelText,
} from './styles';
import {rhythm, colors} from '../../../../styleConstants';

interface Datum {
  date: Date;
  value: number;
}

interface Props {
  width: number;
  height: number;
  data: Datum[];
  handleLayout: (event: LayoutChangeEvent) => void;
}

const Timeline = ({width, height, data = [], handleLayout}: Props) => {
  const contentInset = {
    top: rhythm.vt * 2,
    bottom: rhythm.vt * 2,
    left: rhythm.hz,
    right: rhythm.hz,
  };

  return (
    <Container>
      <Text>Timeline</Text>

      <LineChartContainer>
        <LineChartRowContainer>
          <YAxisLabelText>Cases</YAxisLabelText>

          <YAxis
            data={data.map(({value}) => value)}
            contentInset={contentInset}
            style={styles.yAxis}
            svg={styles.yAxisSvg}
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
                style={{
                  ...styles.lineChart,
                  width,
                  height,
                }}
                svg={styles.lineChartSvg}>
                <Grid direction="BOTH" svg={styles.gridSvg} />
              </LineChart>
            </NeomorphBox>
          </LinearGradient>
        </LineChartRowContainer>

        <XAxis
          data={data}
          xAccessor={({item}) => item.date}
          formatLabel={(value: Date) => moment(value).format('MMM Do')}
          numberOfTicks={6}
          scale={scale.scaleTime}
          contentInset={{
            left: 13 + contentInset.left + rhythm.hz / 2,
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
