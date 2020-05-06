import {ApplicationState} from '../reducers';
import {TimelineData, TimelineDataOptions} from './types';
import {getTrendlineData} from './getTrendlineData';

export const timelineLayoutSelector = (state: ApplicationState) =>
  state.timeline.layout;

export const timelineDataOptionSelector = (state: ApplicationState) =>
  state.timeline.dataOption;

export const getTimelineDataSelector = (
  state: ApplicationState,
  inputData: TimelineData,
  providedDataOption: TimelineDataOptions,
) => {
  const selectedDataOption =
    providedDataOption || timelineDataOptionSelector(state);
  let data = inputData;

  if (selectedDataOption === TimelineDataOptions.PerDay) {
    data = inputData.map((item, index) => {
      const {value} = item;
      let newValue = value;
      const previousItem = inputData[index - 1];

      if (previousItem) {
        newValue = value - previousItem.value;
      }

      return {
        ...item,
        value: newValue,
      };
    });
  }

  const {data: trendlineData, model, terms} = getTrendlineData(data);

  return {data, trendlineData, model, terms};
};
