export enum PageActionTypes {
  SET_HAS_SCROLLED = '@@page/SET_HAS_SCROLLED',
}

export interface PageState {
  hasScrolled: boolean;
}
