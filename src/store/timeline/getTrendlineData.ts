import PolynomialRegression from 'js-polynomial-regression';
import {TimelineData} from './types';

export const getTrendlineData = (
  data: TimelineData,
): {data: TimelineData; model?: any; terms?: any} => {
  if (!data || !data.length || (data && data.length === 1)) {
    return {data: []};
  }

  const mappedData = data.map(({value, date}) => {
    return {
      y: value,
      x: date.getTime(),
    };
  });

  const model = PolynomialRegression.read(mappedData, 3);
  const terms = model.getTerms();
  const startTime = data[0].date.getTime();
  const endTime = data[data.length - 1].date.getTime();
  const dataPoints = 100; // as low as possible but still creates a nice curve
  const interval = (endTime - startTime) / dataPoints;
  const trendlineData = [...Array(dataPoints).keys()].map((_, index) => {
    const time = startTime + interval * index;
    const value = model.predictY(terms, time);
    const date = new Date(time);

    return {
      value,
      date,
    };
  });

  return {data: trendlineData, model, terms};
};
