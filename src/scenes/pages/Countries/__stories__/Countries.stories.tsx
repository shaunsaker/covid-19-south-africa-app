import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Countries, {Country} from '../Countries';
import {getCountriesList} from '../getCountriesList';

const countries = getCountriesList();

const handleCountryPress = (country: Country) => console.log(country.name);
const defaultProps = {
  countries,
  handleCountryPress,
};

storiesOf('Pages|Countries', module).add('default', () => (
  <Countries {...defaultProps} />
));
