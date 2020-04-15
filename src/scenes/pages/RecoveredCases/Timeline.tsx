import React from 'react';

import Timeline from '../../../components/Timeline';
import {useSelector} from 'react-redux';
import {getRecoveredCasesTimelineDataSelector} from '../../../store/selectors';

const TimelineContainer = () => {
  const data = useSelector(getRecoveredCasesTimelineDataSelector);

  return <Timeline data={data} />;
};

export default TimelineContainer;
