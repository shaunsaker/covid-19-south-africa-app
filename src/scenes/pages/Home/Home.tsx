import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles, {ContentContainer} from './styles';
import {colors} from '../../../styleConstants';

import HeaderBar from '../../../components/HeaderBar';
import ConfirmedCases from './components/ConfirmedCases';
import Timeline from './components/Timeline';

const Home = () => {
  return (
    <LinearGradient
      colors={[colors.primaryLight, colors.primary]}
      style={styles.container}>
      <HeaderBar />

      <ContentContainer>
        <ConfirmedCases />

        <Timeline />
      </ContentContainer>
    </LinearGradient>
  );
};

export default Home;
