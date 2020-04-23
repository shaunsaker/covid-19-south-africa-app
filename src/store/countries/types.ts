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
  REMOVE_RECENTLY_SELECTED_COUNTRY = '@@countries/REMOVE_RECENTLY_SELECTED_COUNTRY',
}

export interface CountriesState {
  selectedCountry: Country;
  selectedCountries: SelectedCountry[];
}

interface ApiHistoricalDataTimeline {
  [key: string]: number;
}

export interface ApiHistoricalData {
  timeline: {
    cases: ApiHistoricalDataTimeline;
    deaths: ApiHistoricalDataTimeline;
    recovered: ApiHistoricalDataTimeline;
  };
}

export interface ApiLatestData {
  cases: number;
  deaths: number;
  recovered: number;
  tests: number;
}
