import React, {useCallback} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Timeline from './Timeline';
import {setTimelineLayout, setTimelineDataOption} from '../../store/actions';
import {
  timelineLayoutSelector,
  timelineDataOptionSelector,
  getTimelineDataSelector,
} from '../../store/selectors';
import RadioSelect from '../RadioSelect';
import {RadioSelectOption} from '../RadioSelect/RadioSelect';
import {TimelineDataOptions, TimelineData} from '../../store/types';
import {ApplicationState} from '../../store/reducers';

export interface Props {
  data: TimelineData;
}

const TimelineContainer = ({data: inputData}: Props) => {
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
      dispatch(setTimelineDataOption(option.label as TimelineDataOptions));
    },
    [dispatch],
  );

  const dataOptions = [
    {
      label: TimelineDataOptions.Cumulative,
      isSelected: selectedDataOption === TimelineDataOptions.Cumulative,
    },
    {
      label: TimelineDataOptions.PerDay,
      isSelected: selectedDataOption === TimelineDataOptions.PerDay,
    },
  ];

  const {data, trendlineData} = useSelector((state: ApplicationState) =>
    getTimelineDataSelector(state, inputData),
  );

  return (
    <Timeline
      width={width}
      height={height}
      handleLayout={onLayout}
      data={data}
      trendlineData={trendlineData}>
      <RadioSelect
        options={dataOptions}
        handleSelectOption={onSelectDataOption}
      />
    </Timeline>
  );
};

export default TimelineContainer;
