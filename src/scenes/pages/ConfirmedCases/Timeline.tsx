import React from 'react';

import Timeline from '../../../components/Timeline';
import {useSelector} from 'react-redux';
import {getConfirmedCasesTimelineDataSelector} from '../../../store/selectors';

const TimelineContainer = () => {
  const data = useSelector(getConfirmedCasesTimelineDataSelector);

  return <Timeline data={data} />;
};

export default TimelineContainer;
