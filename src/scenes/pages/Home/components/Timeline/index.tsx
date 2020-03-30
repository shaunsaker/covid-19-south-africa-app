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

  const data = Array.from(Array(30)).map((_, index) => {
    return {
      value: index + 1,
      date: new Date(2020, 2, index + 1),
    };
  });

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
