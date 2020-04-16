import React from 'react';
import Counter from 'react-native-counter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import Animator from 'react-native-simple-animators';

import styles, {
  Container,
  CounterContainer,
  SubtitleWrapper,
  SubtitleContainer,
  SubtitleText,
  FooterText,
  SourceText,
  SourceButton,
} from './styles';

export interface Props {
  title: string;
  start: Number;
  end: Number;
  subtitle?: string;
  lastUpdated: string;
  loading?: boolean;
  handleCountComplete: () => void;
  handleSourcePress: () => void;
}

const CounterView = ({
  start,
  end,
  subtitle,
  lastUpdated,
  loading,
  handleCountComplete,
  handleSourcePress,
}: Props) => {
  return (
    <Container>
      <Animator
        type="opacity"
        initialValue={1}
        finalValue={loading ? 0.33 : 1}
        shouldAnimateIn={loading}
        shouldRepeat
        duration={500}
        style={styles.animator}>
        <CounterContainer subtitle={subtitle}>
          <SubtitleWrapper>
            {subtitle ? (
              <SubtitleContainer>
                <SubtitleText>{subtitle}</SubtitleText>
              </SubtitleContainer>
            ) : null}
          </SubtitleWrapper>

          <Counter
            key={end} // mount new if end changes
            start={start}
            end={end}
            time={2000}
            easing="linear"
            style={styles.counter}
            onComplete={handleCountComplete}
          />
        </CounterContainer>

        <FooterText>
          {loading && start === 0
            ? 'Fetching the latest data...'
            : `Last Updated: ${lastUpdated}`}
        </FooterText>

        {loading && start === 0 ? (
          <View style={styles.sourceButtonPlaceholder} />
        ) : (
          <SourceButton disabled={loading} onPress={handleSourcePress}>
            <SourceText>
              Source <Icon name="open-in-new" />
            </SourceText>
          </SourceButton>
        )}
      </Animator>
    </Container>
  );
};

export default CounterView;
