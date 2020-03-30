export enum ConfirmedCasesActionTypes {
  GET_CONFIRMED_CASES = '@@confirmedCases/GET_CONFIRMED_CASES',
  SET_CONFIRMED_CASES = '@@confirmedCases/SET_CONFIRMED_CASES',
}

export interface ConfirmedCase {
  // TODO:
}

export type ConfirmedCasesState = ConfirmedCase[];
