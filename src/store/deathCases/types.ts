export enum DeathCasesActionTypes {
  GET_DEATH_CASES = '@@deathCases/GET_DEATH_CASES',
  SET_DEATH_CASES = '@@deathCases/SET_DEATH_CASES',
  SET_DEATH_CASES_LOADING = '@@deathCases/SET_DEATH_CASES_LOADING',
  SET_DEATH_CASES_SYNCED = '@@deathCases/SET_DEATH_CASES_SYNCED',
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
  synced: boolean;
};
