import {action} from 'typesafe-actions';

import {CountriesActionTypes, Country} from './types';

export const setSelectedCountry = (country: Country, date: Date) =>
  action(CountriesActionTypes.SET_SELECTED_COUNTRY, {country, date});

export const removeRecentlySelectedCountry = (country: Country) =>
  action(CountriesActionTypes.REMOVE_RECENTLY_SELECTED_COUNTRY, {country});
