import React, {useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Fuse from 'fuse.js';

import Countries from './Countries';
import {getCountriesList} from './getCountriesList';
import {Country} from '../../../store/countries/types';
import {
  getRecentlySelectedCountriesSelector,
  getSelectedCountrySelector,
} from '../../../store/selectors';
import {
  setSelectedCountry,
  resetConfirmedCases,
  resetRecoveredCases,
  resetDeathCases,
  resetTestCases,
  setLatestViewedConfirmedCase,
  setLatestViewedRecoveredCase,
  setLatestViewedDeathCase,
  setLatestViewedTestCase,
} from '../../../store/actions';
import {sortArrayOfObjectsByKey} from '../../../utils';

interface CountriesContainerProps {}

const countries = getCountriesList();

const CountriesContainer = ({}: CountriesContainerProps) => {
  const dispatch = useDispatch();
  const [searchCountriesValue, setSearchCountriesValue] = useState<string>('');
  const recentlySelectedCountries = useSelector(
    getRecentlySelectedCountriesSelector,
  );
  const selectedCountry = useSelector(getSelectedCountrySelector);

  const onSearchCountries = useCallback(
    (text: string) => setSearchCountriesValue(text),
    [],
  );

  const onCountryPress = useCallback(
    (country: Country) => {
      /*
       * If the user selected the current selected country
       */
      if (selectedCountry.code !== country.code) {
        dispatch(setSelectedCountry(country, new Date()));
        dispatch(resetConfirmedCases());
        dispatch(setLatestViewedConfirmedCase(null));
        dispatch(resetRecoveredCases());
        dispatch(setLatestViewedRecoveredCase(null));
        dispatch(resetDeathCases());
        dispatch(setLatestViewedDeathCase(null));
        dispatch(resetTestCases());
        dispatch(setLatestViewedTestCase(null));
      }

      Actions.pop();
    },
    [dispatch, selectedCountry],
  );

  // const onWorldPress = useCallback(() => {
  //   // TODO:
  // }, [dispatch]);

  // Filter countries by searchCountriesValue
  let filteredCountries = countries;
  let filteredRecentlySelectedCountries = recentlySelectedCountries;

  if (searchCountriesValue && searchCountriesValue.length > 1) {
    const searchOptions = {
      threshold: 0.4, // % non-match is useful for handling spelling errors and word order
      minMatchCharLength: 2, // at least 2 characters
      keys: ['name'],
    };
    const fuseCountries = new Fuse(countries, searchOptions);
    filteredCountries = fuseCountries
      .search(searchCountriesValue)
      .map((fuseItem) => fuseItem.item);
    const fuseRecentCountries = new Fuse(
      recentlySelectedCountries,
      searchOptions,
    );
    filteredRecentlySelectedCountries = fuseRecentCountries
      .search(searchCountriesValue)
      .map((fuseItem) => fuseItem.item);
  }

  // Sort the countries by name
  filteredCountries = sortArrayOfObjectsByKey(countries, 'name');

  // Reverse sort the recently selected countries by date
  filteredRecentlySelectedCountries = sortArrayOfObjectsByKey(
    recentlySelectedCountries,
    'date',
  );

  return (
    <Countries
      searchCountriesValue={searchCountriesValue}
      recentlySelectedCountries={filteredRecentlySelectedCountries}
      countries={filteredCountries}
      handleSearchCountries={onSearchCountries}
      handleCountryPress={onCountryPress}
      // handleWorldPress={onWorldPress}
    />
  );
};

export default CountriesContainer;
