import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Timeline from '../Timeline';

const data = Array.from(Array(30)).map((_, index) => {
  return {
    value: index + 1,
    date: new Date(2020, 2, index + 1),
  };
});

storiesOf('Components|Timeline', module).add('default', () => (
  <Timeline
    width={200}
    height={200}
    data={data}
    handleLayout={() => console.log('Layout')}
  />
));
