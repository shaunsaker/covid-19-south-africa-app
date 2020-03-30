import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ConfirmedCases from '../ConfirmedCases';

storiesOf('Components|ConfirmedCases', module).add('default', () => (
  <ConfirmedCases
    start={1}
    end={1170}
    lastUpdated="27 March 2020, 20h14"
    handleSourcePress={() => console.log('Source pressed')}
  />
));
