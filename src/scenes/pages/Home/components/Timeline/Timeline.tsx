import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import {View, LayoutChangeEvent} from 'react-native';
import {LineChart, YAxis, XAxis, Grid} from 'react-native-svg-charts';

import styles, {Container, Text} from './styles';
import {rhythm} from '../../../../../styleConstants';

interface Props {
  width: number;
  height: number;
  data: number[];
  handleLayout: (event: LayoutChangeEvent) => void;
}

const Timeline = ({width, height, data = [], handleLayout}: Props) => {
  return (
    <Container>
      <Text>Timeline</Text>

      <View onLayout={handleLayout} style={styles.contentContainerWrapper}>
        <NeomorphBox inner style={{...styles.contentContainer, width, height}}>
          {/* <YAxis
            data={data}
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={(value) => `${value}ºC`}
          /> */}
          <LineChart
            data={data}
            style={{
              ...styles.lineChart,
              width: width - rhythm.hz * 2,
              height: height - rhythm.vt * 2,
            }}
            svg={styles.lineChartSvg}
            contentInset={{top: 20, bottom: 20}}>
            {/* <Grid /> */}
          </LineChart>
        </NeomorphBox>
      </View>
    </Container>
  );
};

export default Timeline;
