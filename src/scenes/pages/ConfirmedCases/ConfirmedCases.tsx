import React from 'react';

import Page from '../../../components/Page';
import CounterView from './CounterView';
import Timeline from './Timeline';

const ConfirmedCases = () => {
  return (
    <Page>
      <CounterView />

      <Timeline />
    </Page>
  );
};

export default ConfirmedCases;
