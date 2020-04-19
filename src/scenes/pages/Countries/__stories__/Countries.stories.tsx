import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Countries from '../Countries';
import {getCountriesList} from '../getCountriesList';
import {Country} from '../../../../store/countries/types';

const countries = getCountriesList();
const recentlySelectedCountries = countries.filter(
  (country) => country.name === 'South Africa',
);
const searchCountriesValue = '';
const handleSearchCountries = (text: string) => console.log(text);
const handleCountryPress = (country: Country) => console.log(country.name);
const handleWorldPress = () => console.log('World pressed.');
const defaultProps = {
  searchCountriesValue,
  handleSearchCountries,
  recentlySelectedCountries,
  countries,
  handleCountryPress,
  handleWorldPress,
};

storiesOf('Pages|Countries', module)
  .add('default', () => <Countries {...defaultProps} />)
  .add('without recently selected countries', () => (
    <Countries {...defaultProps} recentlySelectedCountries={[]} />
  ));
