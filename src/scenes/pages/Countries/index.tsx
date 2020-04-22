import React, {useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';

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
  removeRecentlySelectedCountry,
} from '../../../store/actions';
import {sortArrayOfObjectsByKey} from '../../../utils';
import {InteractionManager} from 'react-native';

interface CountriesContainerProps {}

const countries = getCountriesList();

const filterCountries = (countriesArr: Country[], value: string) => {
  return countriesArr.filter(
    (country) => country.name.toLowerCase().indexOf(value.toLowerCase()) > -1,
  );
};

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

      InteractionManager.runAfterInteractions(() => {
        Actions.pop();
      });
    },
    [dispatch, selectedCountry],
  );

  const onRecentlySelectedCountryPress = useCallback(
    (country: Country) => {
      dispatch(removeRecentlySelectedCountry(country));
    },
    [dispatch],
  );

  // const onWorldPress = useCallback(() => {
  //   // TODO:
  // }, [dispatch]);

  // Filter countries by searchCountriesValue
  let filteredCountries = sortArrayOfObjectsByKey(countries, 'name');
  let filteredRecentlySelectedCountries = recentlySelectedCountries;

  if (searchCountriesValue && searchCountriesValue.length > 1) {
    filteredCountries = filterCountries(
      filteredCountries,
      searchCountriesValue,
    );
    filteredRecentlySelectedCountries = filterCountries(
      recentlySelectedCountries,
      searchCountriesValue,
    );
  }

  return (
    <Countries
      searchCountriesValue={searchCountriesValue}
      recentlySelectedCountries={filteredRecentlySelectedCountries}
      countries={filteredCountries}
      handleSearchCountries={onSearchCountries}
      handleCountryPress={onCountryPress}
      handleRecentlySelectedCountryPress={onRecentlySelectedCountryPress}
      // handleWorldPress={onWorldPress}
    />
  );
};

export default CountriesContainer;
