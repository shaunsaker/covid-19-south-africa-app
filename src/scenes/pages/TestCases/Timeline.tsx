import React from 'react';

import Timeline from '../../../components/Timeline';
import {useSelector} from 'react-redux';
import {getTestCasesTimelineDataSelector} from '../../../store/selectors';

const TimelineContainer = () => {
  const data = useSelector(getTestCasesTimelineDataSelector);

  return <Timeline data={data} />;
};

export default TimelineContainer;
