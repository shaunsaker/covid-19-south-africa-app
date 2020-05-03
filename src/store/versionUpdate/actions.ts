import {action} from 'typesafe-actions';

import {VersionUpdateTypes} from './types';

export const getVersionUpdate = () =>
  action(VersionUpdateTypes.GET_VERSION_UPDATE);

export const setVersionUpdate = (versionUpdate: string | null) =>
  action(VersionUpdateTypes.SET_VERSION_UPDATE, {versionUpdate});
