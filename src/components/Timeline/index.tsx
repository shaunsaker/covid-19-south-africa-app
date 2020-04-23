import React, {useCallback} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Timeline from './Timeline';
import {setTimelineLayout, setTimelineDataOption} from '../../store/actions';
import {
  timelineLayoutSelector,
  timelineDataOptionSelector,
} from '../../store/selectors';
import RadioSelect from '../RadioSelect';
import {RadioSelectOption} from '../RadioSelect/RadioSelect';
import {TimelineDataOptions} from '../../store/types';
import {getTrendlineData} from './getTrendlineData';

export interface Datum {
  date: Date;
  value: number;
}

export type Data = Datum[];

export interface Props {
  data: Data;
}

// FIXME: Data options needs work
const TimelineContainer = ({...props}: Props) => {
  const dispatch = useDispatch();
  const {width, height} = useSelector(timelineLayoutSelector);
  const selectedDataOption = useSelector(timelineDataOptionSelector);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const {layout} = event.nativeEvent;

      dispatch(setTimelineLayout(layout));
    },
    [dispatch],
  );

  const onSelectDataOption = useCallback(
    (option: RadioSelectOption) => {
      let dataOption;

      if (option.label === 'Cumulative') {
        dataOption = TimelineDataOptions.Cumulative;
      } else {
        dataOption = TimelineDataOptions.PerDay;
      }

      dispatch(setTimelineDataOption(dataOption));
    },
    [dispatch],
  );

  const dataOptions = [
    {label: 'Cumulative', isSelected: selectedDataOption === 0},
    {label: 'Per Day', isSelected: selectedDataOption === 1},
  ];

  const {data} = props;
  let newData;

  if (selectedDataOption === 1) {
    newData = data.map((item, index) => {
      const {value} = item;
      let newValue = value;
      const previousItem = data[index - 1];

      if (previousItem) {
        newValue = value - previousItem.value;
      }

      return {
        ...item,
        value: newValue,
      };
    });
  } else {
    newData = data;
  }

  const trendlineData = data.length > 1 ? getTrendlineData(newData) : [];

  return (
    <Timeline
      {...props}
      width={width}
      height={height}
      handleLayout={onLayout}
      data={newData}
      trendlineData={trendlineData}>
      <RadioSelect
        options={dataOptions}
        handleSelectOption={onSelectDataOption}
      />
    </Timeline>
  );
};

export default TimelineContainer;
