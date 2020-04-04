import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import ConfirmedCases from '../ConfirmedCases';
import {colors} from '../../../../../styleConstants';

storiesOf('Components|ConfirmedCases', module)
  .addDecorator((storyFn: any) => (
    <View style={{backgroundColor: colors.primaryLight}}>{storyFn()}</View>
  ))
  .add('default', () => (
    <ConfirmedCases
      start={1}
      end={1170}
      lastUpdated="27 March 2020, 20h14"
      handleSourcePress={() => console.log('Source pressed')}
      handleCountComplete={() => console.log('Count complete')}
    />
  ))
  .add('loading', () => (
    <ConfirmedCases
      start={0}
      end={0}
      lastUpdated=""
      loading
      handleSourcePress={() => console.log('Source pressed')}
      handleCountComplete={() => console.log('Count complete')}
    />
  ));
