import React from 'react';
import {storiesOf} from '@storybook/react-native';

import TestCases from '../TestCases';

storiesOf('Pages|TestCases', module).add('default', () => <TestCases />);
