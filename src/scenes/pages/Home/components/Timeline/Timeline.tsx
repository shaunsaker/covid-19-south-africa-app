import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';

import styles, {Container, Text} from './styles';

interface Props {}

const Timeline = ({}: Props) => {
  return (
    <Container>
      <Text>Timeline</Text>

      <NeomorphBox inner style={styles.contentContainer}></NeomorphBox>
    </Container>
  );
};

export default Timeline;
