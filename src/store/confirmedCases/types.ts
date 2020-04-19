export enum ConfirmedCasesActionTypes {
  GET_CONFIRMED_CASES = '@@confirmedCases/GET_CONFIRMED_CASES',
  SET_CONFIRMED_CASES = '@@confirmedCases/SET_CONFIRMED_CASES',
  SET_CONFIRMED_CASES_LOADING = '@@confirmedCases/SET_CONFIRMED_CASES_LOADING',
  SET_CONFIRMED_CASES_SYNCED = '@@confirmedCases/SET_CONFIRMED_CASES_SYNCED',
  RESET_CONFIRMED_CASES = '@@confirmedCases/RESET_CONFIRMED_CASES',
}

export interface ConfirmedCase {
  dateAdded: string;
  confirmedCases: number;
  dateCreated: string;
  href: string;
  id: string;
}

export type ConfirmedCasesState = {
  data: ConfirmedCase[];
  loading: boolean;
  synced: boolean;
};
