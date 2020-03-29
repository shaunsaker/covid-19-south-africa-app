import React from 'react';

import {Container, ContentContainer} from './styles';

import HeaderBar from '../../../components/HeaderBar';

const Home = () => {
  return (
    <Container>
      <HeaderBar />

      <ContentContainer></ContentContainer>
    </Container>
  );
};

export default Home;
