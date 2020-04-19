export enum TestCasesActionTypes {
  GET_TEST_CASES = '@@testCases/GET_TEST_CASES',
  SET_TEST_CASES = '@@testCases/SET_TEST_CASES',
  SET_TEST_CASES_LOADING = '@@testCases/SET_TEST_CASES_LOADING',
  SET_TEST_CASES_SYNCED = '@@testCases/SET_TEST_CASES_SYNCED',
  RESET_TEST_CASES = '@@testCases/RESET_TEST_CASES',
}

export interface TestCase {
  dateAdded: string;
  tests: number;
  dateCreated: string;
  href: string;
  id: string;
}

export type TestCasesState = {
  data: TestCase[];
  loading: boolean;
  synced: boolean;
};
