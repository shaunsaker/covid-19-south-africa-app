import {Reducer} from 'redux';

import {CountriesActionTypes, CountriesState} from './types';
import {getCountriesList} from '../../scenes/pages/Countries/getCountriesList';

/*
 * Set the initial selected country to South Africa
 */
const countries = getCountriesList();
const initialSelectedCountry = countries.filter(
  (country) => country.name === 'South Africa',
)[0];

export const initialState: CountriesState = {
  selectedCountry: initialSelectedCountry,
  selectedCountries: [{country: initialSelectedCountry, date: new Date()}],
};

const reducer: Reducer<CountriesState> = (state = initialState, action) => {
  switch (action.type) {
    case CountriesActionTypes.SET_SELECTED_COUNTRY: {
      const newSelectedCountries = [...state.selectedCountries];

      /*
       * Add the selectedCountry to selectedCountries if it's not already present
       * Otherwise, update the date
       */
      const selectedCountryIndex = newSelectedCountries.findIndex(
        (selectedCountry) =>
          selectedCountry.country.code === action.payload.country.code,
      );

      if (selectedCountryIndex === -1) {
        newSelectedCountries.push({
          country: action.payload.country,
          date: action.payload.date,
        });
      } else {
        newSelectedCountries[selectedCountryIndex].date = action.payload.date;
      }

      return {
        ...state,
        selectedCountry: action.payload.country,
        selectedCountries: newSelectedCountries,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
