import React from 'react';

import Timeline from '../../../components/Timeline';
import {useSelector} from 'react-redux';
import {getChronoSortedDeathCasesSelector} from '../../../store/selectors';
import {DeathCase} from '../../../store/types';

const TimelineContainer = () => {
  const deathCases: DeathCase[] = useSelector(
    getChronoSortedDeathCasesSelector,
  );
  const data = deathCases.map((deathCase) => {
    const {dateCreated} = deathCase;

    return {
      value: deathCase.deaths,
      date: new Date(dateCreated),
    };
  });

  return <Timeline data={data} />;
};

export default TimelineContainer;
