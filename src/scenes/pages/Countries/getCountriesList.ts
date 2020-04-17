import countryList from 'country-list';

import {Country} from './Countries';
import {countriesImagesUrl} from '../../../config';

export const getCountriesList = (): Country[] => {
  const countries: Country[] = countryList.getData().map((country) => {
    const imageUri = `${countriesImagesUrl}${country.code.toLowerCase()}.png`;

    return {
      ...country,
      imageUri,
    };
  });

  return countries;
};
