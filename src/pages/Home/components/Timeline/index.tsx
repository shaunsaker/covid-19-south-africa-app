import React, {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';

import Timeline from './Timeline';
import {useSelector} from 'react-redux';
import {getChronoSortedConfirmedCasesSelector} from '../../../../store/selectors';
import {ConfirmedCase} from '../../../../store/types';

const TimelineContainer = () => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });
  const confirmedCases: ConfirmedCase[] = useSelector(
    getChronoSortedConfirmedCasesSelector,
  );
  const data = confirmedCases.map((confirmedCase) => {
    const {dateCreated} = confirmedCase;

    return {
      value: confirmedCase.confirmedCases,
      date: new Date(dateCreated),
    };
  });

  const onLayout = (event: LayoutChangeEvent) => {
    const {layout: newLayout} = event.nativeEvent;

    setLayout(newLayout);
  };

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
