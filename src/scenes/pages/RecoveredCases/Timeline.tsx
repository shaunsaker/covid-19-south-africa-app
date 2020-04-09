import React from 'react';

import Timeline from '../../../components/Timeline';
import {useSelector} from 'react-redux';
import {getChronoSortedRecoveredCasesSelector} from '../../../store/selectors';
import {RecoveredCase} from '../../../store/types';

const TimelineContainer = () => {
  const recoveredCases: RecoveredCase[] = useSelector(
    getChronoSortedRecoveredCasesSelector,
  );
  const data = recoveredCases.map((recoverdCase) => {
    const {dateCreated} = recoverdCase;

    return {
      value: recoverdCase.recovered,
      date: new Date(dateCreated),
    };
  });

  return <Timeline data={data} />;
};

export default TimelineContainer;
