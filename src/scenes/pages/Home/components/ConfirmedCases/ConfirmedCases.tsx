import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import Counter from 'react-native-counter';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles, {
  Container,
  TitleText,
  FooterText,
  SourceText,
  SourceButton,
} from './styles';

interface Props {
  start: Number;
  end: Number;
  lastUpdated: string;
  handleSourcePress: () => void;
}

const ConfirmedCases = ({
  start,
  end,
  lastUpdated,
  handleSourcePress,
}: Props) => {
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

        <SourceButton onPress={handleSourcePress}>
          <SourceText>
            Source <Icon name="open-in-new" />
          </SourceText>
        </SourceButton>
      </NeomorphBox>
    </Container>
  );
};

export default ConfirmedCases;
