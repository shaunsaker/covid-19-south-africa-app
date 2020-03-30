import React, {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';

import Timeline from './Timeline';
import {useSelector} from 'react-redux';
import {getChronoSortedConfirmedCasesSelector} from '../../../../store/selectors';
import {ConfirmedCase} from '../../../../store/types';
import moment from 'moment';

const TimelineContainer = () => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });
  const confirmedCases: ConfirmedCase[] = useSelector(
    getChronoSortedConfirmedCasesSelector,
  );
  const data = confirmedCases.map((confirmedCase) => {
    const {dateCreated} = confirmedCase; // format is Mar 19th, 2020
    const dateParts = dateCreated.split(' ');
    const dayMatch = dateParts[1].match(/\d*/);
    const day = dayMatch && Number(dayMatch[0]);
    const month = dateParts[0];
    const year = Number(dateParts.reverse()[0]);
    const date = moment(`${day} ${month} ${year}`).toDate();

    return {
      value: confirmedCase.confirmedCases,
      date,
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
