import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {Label} from '..';
import Background from '../../Background/Background';
import CenterView from '../../CenterView';

storiesOf('Components|Label', module)
  .addDecorator((storyFn: any) => (
    <Background>
      <CenterView>{storyFn()}</CenterView>
    </Background>
  ))
  .add('default', () => <Label>99% of closed cases</Label>);
