import {useEffect, useCallback} from 'react';
import CodePush from 'react-native-code-push';
import Snackbar from 'react-native-snackbar';
import {AppState, AppStateStatus} from 'react-native';

import {snackbar} from '../../config';

const CodePushHandler = () => {
  const showSnackbar = useCallback((text: string) => {
    Snackbar.show({
      ...snackbar,
      text,
    });
  }, []);

  const syncCodePush = useCallback(() => {
    const codePushStatusDidChange = (status: CodePush.SyncStatus) => {
      switch (status) {
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          showSnackbar('Downloading update...');
          break;

        case CodePush.SyncStatus.UPDATE_INSTALLED:
          Snackbar.dismiss();
          break;

        default:
          break;
      }
    };

    CodePush.sync(
      {installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: {}},
      codePushStatusDidChange,
    );
  }, [showSnackbar]);

  const onAppStateChange = useCallback(
    (appState: AppStateStatus) => {
      if (appState === 'active') {
        syncCodePush();
      }
    },
    [syncCodePush],
  );

  useEffect(() => {
    if (!__DEV__) {
      syncCodePush();

      AppState.addEventListener('change', onAppStateChange);

      return () => {
        AppState.removeEventListener('change', onAppStateChange);
      };
    }
  });

  return null;
};

export default CodePushHandler;
