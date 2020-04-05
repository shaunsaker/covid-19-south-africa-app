import React from 'react';

import Timeline from '../../../components/Timeline';
import {useSelector} from 'react-redux';
import {getChronoSortedConfirmedCasesSelector} from '../../../store/selectors';
import {ConfirmedCase} from '../../../store/types';

const TimelineContainer = () => {
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

  return <Timeline data={data} />;
};

export default TimelineContainer;
