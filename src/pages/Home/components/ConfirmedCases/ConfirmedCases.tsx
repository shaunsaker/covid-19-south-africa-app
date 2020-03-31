import React from 'react';
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
  handleCountComplete: () => void;
  handleSourcePress: () => void;
}

const ConfirmedCases = ({
  start,
  end,
  lastUpdated,
  handleCountComplete,
  handleSourcePress,
}: Props) => {
  return (
    <Container>
      <TitleText>Confirmed Cases</TitleText>

      <Counter
        key={end} // mount new if end changes
        start={start}
        end={end}
        time={2000}
        easing="linear"
        style={styles.counter}
        onComplete={handleCountComplete}
      />

      <FooterText>Last Updated: {lastUpdated}</FooterText>

      <SourceButton onPress={handleSourcePress}>
        <SourceText>
          Source <Icon name="open-in-new" />
        </SourceText>
      </SourceButton>
    </Container>
  );
};

export default ConfirmedCases;
