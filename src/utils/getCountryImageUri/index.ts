import {countriesImagesUrl} from '../../config';

export const getCountryImageUri = (countryCode: string): string => {
  const imageUri = `${countriesImagesUrl}${countryCode.toLowerCase()}.png`;

  return imageUri;
};
