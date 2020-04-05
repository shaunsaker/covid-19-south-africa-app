import React from 'react';

import {ContentContainer} from './styles';

import Background from '../../components/Background/Background';
import HeaderBar from '../../components/HeaderBar';
import ConfirmedCases from './ConfirmedCases';
import Timeline from './Timeline';

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
