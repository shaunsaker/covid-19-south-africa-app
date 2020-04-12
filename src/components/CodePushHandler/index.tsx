import {useEffect} from 'react';
import CodePush from 'react-native-code-push';
import Snackbar from 'react-native-snackbar';
import {AppState, AppStateStatus} from 'react-native';

import {snackbar} from '../../config';

const CodePushHandler = () => {
  const syncCodePush = () => {
    CodePush.sync(
      {installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: {}},
      codePushStatusDidChange,
    );
  };

  const onAppStateChange = (appState: AppStateStatus) => {
    if (appState === 'active') {
      syncCodePush();
    }
  };

  const showSnackbar = (text: string) => {
    Snackbar.show({
      ...snackbar,
      text,
    });
  };

  const codePushStatusDidChange = (status: CodePush.SyncStatus) => {
    switch (status) {
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        showSnackbar('Downloading update...');
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        showSnackbar(
          'An update is ready to be installed. Close and reopen the app to install.',
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (!__DEV__) {
      syncCodePush();

      AppState.addEventListener('change', onAppStateChange);

      return () => {
        AppState.removeEventListener('change', onAppStateChange);
      };
    }
  }, []);

  return null;
};

export default CodePushHandler;
