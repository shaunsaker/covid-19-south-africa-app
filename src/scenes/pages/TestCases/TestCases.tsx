import React from 'react';

import {ContentContainer} from './styles';

import Background from '../../../components/Background/Background';
import HeaderBar from '../../../components/HeaderBar';
import CounterView from './CounterView';
import Timeline from './Timeline';
import TabBar from '../../../components/TabBar';

const TestCases = () => {
  return (
    <Background>
      <HeaderBar />

      <ContentContainer>
        <CounterView />

        <Timeline />
      </ContentContainer>

      <TabBar />
    </Background>
  );
};

export default TestCases;
