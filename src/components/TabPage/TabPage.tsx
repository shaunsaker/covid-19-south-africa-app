import React, {ReactNode} from 'react';

import {ContentContainer} from './styles';

import Background from '../Background/Background';
import HeaderBar from '../HeaderBar';
import TabBar from '../TabBar';

export interface TabPageProps {
  children: ReactNode;
}

const TabPage = ({children}: TabPageProps) => {
  return (
    <Background>
      <HeaderBar />

      <ContentContainer>{children}</ContentContainer>

      <TabBar />
    </Background>
  );
};

export default TabPage;
