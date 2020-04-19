export enum RecoveredCasesActionTypes {
  GET_RECOVERED_CASES = '@@recoveredCases/GET_RECOVERED_CASES',
  SET_RECOVERED_CASES = '@@recoveredCases/SET_RECOVERED_CASES',
  SET_RECOVERED_CASES_LOADING = '@@recoveredCases/SET_RECOVERED_CASES_LOADING',
  SET_RECOVERED_CASES_SYNCED = '@@recoveredCases/SET_RECOVERED_CASES_SYNCED',
  RESET_RECOVERED_CASES = '@@recoveredCases/RESET_RECOVERED_CASES',
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
  synced: boolean;
};
