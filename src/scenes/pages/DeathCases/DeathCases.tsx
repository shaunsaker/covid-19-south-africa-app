import React from 'react';

import Page from '../../../components/Page';
import CounterView from './CounterView';
import Timeline from './Timeline';

const DeathCases = () => {
  return (
    <Page>
      <CounterView />

      <Timeline />
    </Page>
  );
};

export default DeathCases;
