import React from 'react';

import Timeline from '../../../components/Timeline';
import {useSelector} from 'react-redux';
import {getChronoSortedTestCasesSelector} from '../../../store/selectors';
import {TestCase} from '../../../store/types';

const TimelineContainer = () => {
  const testCases: TestCase[] = useSelector(getChronoSortedTestCasesSelector);
  const data = testCases.map((testCase) => {
    const {dateCreated} = testCase;

    return {
      value: testCase.tests,
      date: new Date(dateCreated),
    };
  });

  return <Timeline data={data} />;
};

export default TimelineContainer;
