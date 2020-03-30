import React from 'react';

import {ContentContainer} from './styles';

import Background from '../../../components/Background/Background';
import HeaderBar from '../../../components/HeaderBar';
import ConfirmedCases from './components/ConfirmedCases';
import Timeline from './components/Timeline';

const Home = () => {
  return (
    <Background>
      <HeaderBar />

      <ContentContainer>
        <ConfirmedCases />

        <Timeline />
      </ContentContainer>
    </Background>
  );
};

export default Home;
