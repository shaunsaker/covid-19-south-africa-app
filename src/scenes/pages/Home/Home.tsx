import React from 'react';

import {Container, ContentContainer} from './styles';

import HeaderBar from '../../../components/HeaderBar';
import ConfirmedCases from './components/ConfirmedCases';
import Timeline from './components/Timeline';

const Home = () => {
  return (
    <Container>
      <HeaderBar />

      <ContentContainer>
        <ConfirmedCases />

        <Timeline />
      </ContentContainer>
    </Container>
  );
};

export default Home;
