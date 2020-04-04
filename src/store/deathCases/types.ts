export enum DeathCasesActionTypes {
  GET_DEATH_CASES = '@@confirmedCases/GET_DEATH_CASES',
  SET_DEATH_CASES = '@@confirmedCases/SET_DEATH_CASES',
  SET_DEATH_CASES_LOADING = '@@confirmedCases/SET_DEATH_CASES_LOADING',
}

export interface DeathCase {
  dateAdded: string;
  deaths: number;
  dateCreated: string;
  href: string;
  id: string;
}

export type DeathCasesState = {
  data: DeathCase[];
  loading: boolean;
};
