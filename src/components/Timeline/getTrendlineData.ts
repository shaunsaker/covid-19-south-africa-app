import PolynomialRegression from 'js-polynomial-regression';

import {Data} from '.';

/*
 * FIXME: Memoize this function
 */
export const getTrendlineData = (data: Data) => {
  if (!data || !data.length) {
    return [];
  }

  const mappedData = data.map(({value, date}) => {
    return {
      y: value,
      x: date.getTime(),
    };
  });

  const model = PolynomialRegression.read(mappedData, 2);
  const terms = model.getTerms();
  const startTime = data[0].date.getTime();
  const endTime = data[data.length - 1].date.getTime();
  const dataPoints = 20; // as low as possible but still creates a nice curve
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

  return trendlineData;
};
