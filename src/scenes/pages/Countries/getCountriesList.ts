import countryList from 'country-list';

import {getCountryImageUri} from '../../../utils';
import {Country} from '../../../store/countries/types';

export const getCountriesList = (): Country[] => {
  const countries: Country[] = countryList.getData().map((country) => {
    const imageUri = getCountryImageUri(country.code);

    return {
      ...country,
      imageUri,
    };
  });

  return countries;
};
