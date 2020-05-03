export enum VersionUpdateTypes {
  GET_VERSION_UPDATE = '@@versionUpdate/GET_VERSION_UPDATE',
  SET_VERSION_UPDATE = '@@versionUpdate/SET_VERSION_UPDATE',
}

export type VersionUpdateState = string | null;
