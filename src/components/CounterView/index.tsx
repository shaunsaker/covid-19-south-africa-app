import React from 'react';
import Counter from 'react-native-counter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import Animator from 'react-native-simple-animators';

import styles, {
  Container,
  TitleText,
  FooterText,
  SourceText,
  SourceButton,
  LoadingContainer,
} from './styles';

interface Props {
  title: string;
  start: Number;
  end: Number;
  lastUpdated: string;
  loading?: boolean;
  handleCountComplete: () => void;
  handleSourcePress: () => void;
}

const CounterView = ({
  title,
  start,
  end,
  lastUpdated,
  loading,
  handleCountComplete,
  handleSourcePress,
}: Props) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>

      {loading ? (
        <Animator
          type="opacity"
          initialValue={0.33}
          finalValue={1}
          shouldAnimateIn
          shouldRepeat
          duration={750}>
          <LoadingContainer />
        </Animator>
      ) : (
        <Counter
          key={end} // mount new if end changes
          start={start}
          end={end}
          time={2000}
          easing="linear"
          style={styles.counter}
          onComplete={handleCountComplete}
        />
      )}

      <FooterText>
        {!loading
          ? `Last Updated: ${lastUpdated}`
          : 'Fetching the latest data...'}
      </FooterText>

      {!loading ? (
        <SourceButton onPress={handleSourcePress}>
          <SourceText>
            Source <Icon name="open-in-new" />
          </SourceText>
        </SourceButton>
      ) : (
        <View style={styles.sourceButtonPlaceholder} />
      )}
    </Container>
  );
};

export default CounterView;
