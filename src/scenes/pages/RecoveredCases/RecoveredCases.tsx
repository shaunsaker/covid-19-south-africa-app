import React from 'react';

import {ContentContainer} from './styles';

import Page from '../../../components/Page';
import CounterView from './CounterView';
import Timeline from './Timeline';

const RecoveredCases = () => {
  return (
    <Page>
      <ContentContainer>
        <CounterView />

        <Timeline />
      </ContentContainer>
    </Page>
  );
};

export default RecoveredCases;
