export interface Country {
  code: string;
  name: string;
  imageUri: string;
}

export interface SelectedCountry {
  country: Country;
  date: Date;
}

export enum CountriesActionTypes {
  SET_SELECTED_COUNTRY = '@@countries/SET_SELECTED_COUNTRY',
}

export interface CountriesState {
  selectedCountry: Country;
  selectedCountries: SelectedCountry[];
}
