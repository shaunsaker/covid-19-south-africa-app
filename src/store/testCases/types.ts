export enum TestCasesActionTypes {
  GET_TEST_CASES = '@@confirmedCases/GET_TEST_CASES',
  SET_TEST_CASES = '@@confirmedCases/SET_TEST_CASES',
  SET_TEST_CASES_LOADING = '@@confirmedCases/SET_TEST_CASES_LOADING',
  SET_TEST_CASES_SYNCED = '@@confirmedCases/SET_TEST_CASES_SYNCED',
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
