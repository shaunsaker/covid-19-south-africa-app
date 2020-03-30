import React from 'react';
import {storiesOf} from '@storybook/react-native';

import SideMenu from '../SideMenu';

const version = 'v1.2.0 (50)';
const handleGetInTouch = () => console.log('Get in touch');
const defaultProps = {
  version,
  handleGetInTouch,
};

storiesOf('Components|SideMenu', module).add('default', () => (
  <SideMenu {...defaultProps} />
));
