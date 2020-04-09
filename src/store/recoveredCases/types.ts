export enum RecoveredCasesActionTypes {
  GET_RECOVERED_CASES = '@@confirmedCases/GET_RECOVERED_CASES',
  SET_RECOVERED_CASES = '@@confirmedCases/SET_RECOVERED_CASES',
  SET_RECOVERED_CASES_LOADING = '@@confirmedCases/SET_RECOVERED_CASES_LOADING',
}

export interface RecoveredCase {
  dateAdded: string;
  recovered: number;
  dateCreated: string;
  href: string;
  id: string;
}

export type RecoveredCasesState = {
  data: RecoveredCase[];
  loading: boolean;
};
