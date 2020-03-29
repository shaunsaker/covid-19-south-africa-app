import React from 'react';

import ConfirmedCases from './ConfirmedCases';

const ConfirmedCasesContainer = () => {
  const start = 0;
  const end = 1170;
  const lastUpdated = '27 March 2020, 20h14';

  const onSourcePress = () => {};

  return (
    <ConfirmedCases
      start={start}
      end={end}
      lastUpdated={lastUpdated}
      handleSourcePress={onSourcePress}
    />
  );
};

export default ConfirmedCasesContainer;
