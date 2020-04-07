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

export interface Props {
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
      <Animator
        type="opacity"
        initialValue={loading ? 0.33 : 1}
        finalValue={1}
        shouldAnimateIn={loading}
        shouldRepeat
        duration={500}>
        <Counter
          key={end} // mount new if end changes
          start={start}
          end={end}
          time={2000}
          easing="linear"
          style={styles.counter}
          onComplete={handleCountComplete}
        />
      </Animator>
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
