import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import Timeline from '../Timeline';
import {rhythm, colors} from '../../../styleConstants';

const data = Array.from(Array(30)).map((_, index) => {
  return {
    value: index + 1,
    date: new Date(2020, 2, index + 1),
  };
});

storiesOf('Components|Timeline', module).add('default', () => (
  <View
    style={{
      flex: 1,
      paddingHorizontal: rhythm.hz,
      backgroundColor: colors.primary,
    }}>
    <View style={{flex: 1}} />

    <Timeline
      width={200}
      height={200}
      data={data}
      handleLayout={() => console.log('Layout')}
    />
  </View>
));
