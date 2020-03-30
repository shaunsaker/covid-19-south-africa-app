import React, {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';

import Timeline from './Timeline';

const TimelineContainer = () => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  const onLayout = (event: LayoutChangeEvent) => {
    const {layout: newLayout} = event.nativeEvent;

    setLayout(newLayout);
  };

  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <Timeline
      width={layout.width}
      height={layout.height}
      data={data}
      handleLayout={onLayout}
    />
  );
};

export default TimelineContainer;
