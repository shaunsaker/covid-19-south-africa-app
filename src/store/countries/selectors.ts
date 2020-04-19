import {ApplicationState} from '../reducers';
import {createSelector} from 'reselect';

import {sortArrayOfObjectsByKey} from '../../utils';

export const getSelectedCountrySelector = (state: ApplicationState) =>
  state.countries.selectedCountry;

export const getSelectedCountriesSelector = (state: ApplicationState) =>
  state.countries.selectedCountries;

export const getRecentlySelectedCountriesSelector = createSelector(
  getSelectedCountriesSelector,
  (selectedCountries) => {
    /*
     * Sort by latest to oldest
     */
    const sortedSelectedCountries = sortArrayOfObjectsByKey(
      selectedCountries,
      'date',
      true,
    );

    /*
     * Return the country only
     * We don't actually check if it's recent, we just use the date to sort for now
     */
    const recentlySelectedCountriesSelector = sortedSelectedCountries.map(
      (selectedCountry) => selectedCountry.country,
    );

    return recentlySelectedCountriesSelector;
  },
);

export const isSelectedCountrySouthAfricaSelector = createSelector(
  getSelectedCountrySelector,
  (selectedCountry) => {
    return selectedCountry.name === 'South Africa';
  },
);
