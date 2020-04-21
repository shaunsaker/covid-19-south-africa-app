import React from 'react';
import Counter from 'react-native-counter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, ActivityIndicator} from 'react-native';
import Animator from 'react-native-simple-animators';

import styles, {
  Container,
  CounterContainer,
  SubtitleWrapper,
  FooterText,
  SourceText,
  SourceButton,
  LoadingContainer,
  LabelContainer,
} from './styles';
import {colors} from '../../styleConstants';
import {Label} from '../Label';

export interface Props {
  title: string;
  start: Number;
  end: Number;
  latestChange?: number;
  subtitle?: string;
  lastUpdated: string;
  loading?: boolean;
  noData?: boolean;
  handleCountComplete: () => void;
  handleSourcePress: () => void;
}

const CounterView = ({
  start,
  end,
  latestChange,
  subtitle,
  lastUpdated,
  loading,
  noData,
  handleCountComplete,
  handleSourcePress,
}: Props) => {
  return (
    <Container>
      <SubtitleWrapper>
        {subtitle ? <Label>{subtitle}</Label> : null}
      </SubtitleWrapper>

      <Animator
        type="opacity"
        initialValue={1}
        finalValue={loading ? 0.33 : 1}
        shouldAnimateIn={loading}
        shouldRepeat
        duration={500}
        style={styles.animator}>
        <CounterContainer>
          <Counter
            key={end} // mount new if end changes
            start={start}
            end={end}
            time={2000}
            easing="linear"
            style={styles.counter}
            onComplete={handleCountComplete}
          />
          {loading ? (
            <LoadingContainer>
              <Animator
                type="opacity"
                initialValue={0}
                finalValue={1}
                shouldAnimateIn
                duration={1000}>
                <ActivityIndicator size="small" color={colors.primaryText} />
              </Animator>
            </LoadingContainer>
          ) : null}

          {!noData && !loading && latestChange ? (
            <LabelContainer>
              <Label iconName="arrow-upward">{latestChange}</Label>
            </LabelContainer>
          ) : null}
        </CounterContainer>
      </Animator>

      <FooterText>
        {noData
          ? "We couldn't find any data on this."
          : loading && start === 0
          ? 'Fetching the latest data...'
          : `Last Updated: ${lastUpdated}`}
      </FooterText>

      {(loading && start === 0) || noData ? (
        <View style={styles.sourceButtonPlaceholder} />
      ) : (
        <SourceButton disabled={loading} onPress={handleSourcePress}>
          <SourceText>
            Source <Icon name="open-in-new" />
          </SourceText>
        </SourceButton>
      )}
    </Container>
  );
};

export default CounterView;
