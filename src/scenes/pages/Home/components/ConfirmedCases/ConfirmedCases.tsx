import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import Counter from 'react-native-counter';

import styles, {Container, TitleText, FooterText} from './styles';

interface Props {
  start: Number;
  end: Number;
  lastUpdated: string;
}

const ConfirmedCases = ({start, end, lastUpdated}: Props) => {
  return (
    <Container>
      <NeomorphBox inner style={styles.contentContainer}>
        <TitleText>Confirmed Cases</TitleText>

        <Counter
          start={start}
          end={end}
          time={3000}
          easing="cubicOut"
          style={styles.counter}
        />

        <FooterText>Last Updated: {lastUpdated}</FooterText>
      </NeomorphBox>
    </Container>
  );
};

export default ConfirmedCases;
