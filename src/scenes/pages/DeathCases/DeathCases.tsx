import React from 'react';

import TabPage from '../../../components/TabPage';
import CounterView from './CounterView';
import Timeline from './Timeline';

const DeathCases = () => {
  return (
    <TabPage>
      <CounterView />

      <Timeline />
    </TabPage>
  );
};

export default DeathCases;
