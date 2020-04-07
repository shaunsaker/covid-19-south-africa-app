import React from 'react';
import {LayoutChangeEvent} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Timeline from './Timeline';
import {setTimelineLayout} from '../../store/actions';
import {timelineLayoutSelector} from '../../store/selectors';

interface Datum {
  date: Date;
  value: number;
}

export interface Props {
  data: Datum[];
}

const TimelineContainer = ({...props}: Props) => {
  const dispatch = useDispatch();
  const {width, height} = useSelector(timelineLayoutSelector);

  const onLayout = (event: LayoutChangeEvent) => {
    const {layout} = event.nativeEvent;

    dispatch(setTimelineLayout(layout));
  };

  return (
    <Timeline
      width={width}
      height={height}
      handleLayout={onLayout}
      {...props}
    />
  );
};

export default TimelineContainer;
