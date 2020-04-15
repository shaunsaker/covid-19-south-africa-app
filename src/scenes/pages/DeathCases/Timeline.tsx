import React from 'react';

import Timeline from '../../../components/Timeline';
import {useSelector} from 'react-redux';
import {getDeathCasesTimelineDataSelector} from '../../../store/selectors';

const TimelineContainer = () => {
  const data = useSelector(getDeathCasesTimelineDataSelector);

  return <Timeline data={data} />;
};

export default TimelineContainer;
