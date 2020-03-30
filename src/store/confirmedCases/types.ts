export enum ConfirmedCasesActionTypes {
  GET_CONFIRMED_CASES = '@@confirmedCases/GET_CONFIRMED_CASES',
  SET_CONFIRMED_CASES = '@@confirmedCases/SET_CONFIRMED_CASES',
}

export interface ConfirmedCase {
  dateAdded: string;
  confirmedCases: number;
  dateCreated: string;
  title: string;
  href: string;
  id: string;
}

export type ConfirmedCasesState = ConfirmedCase[];
