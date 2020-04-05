import React, {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';

import Timeline from './Timeline';

interface Datum {
  date: Date;
  value: number;
}

export interface Props {
  data: Datum[];
}

const TimelineContainer = ({...props}: Props) => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  const onLayout = (event: LayoutChangeEvent) => {
    const {layout: newLayout} = event.nativeEvent;

    setLayout(newLayout);
  };

  return (
    <Timeline
      width={layout.width}
      height={layout.height}
      handleLayout={onLayout}
      {...props}
    />
  );
};

export default TimelineContainer;
