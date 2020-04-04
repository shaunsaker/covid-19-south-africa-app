import {useEffect} from 'react';
import CodePush from 'react-native-code-push';
import Snackbar from 'react-native-snackbar';

import {snackbar} from '../../config';

const CodePushHandler = () => {
  const showSnackbar = (text: string) => {
    Snackbar.show({
      ...snackbar,
      text,
    });
  };

  const codePushStatusDidChange = (status: CodePush.SyncStatus) => {
    switch (status) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        showSnackbar('Checking for updates...');
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        showSnackbar('Downloading update...');
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        showSnackbar(
          'An update is ready to be installed. Close and reopen the app to install.',
        );
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        showSnackbar('App is up to date.');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    /*
     * On mount, sync code push
     */
    CodePush.sync(
      {installMode: CodePush.InstallMode.ON_NEXT_RESTART, updateDialog: {}},
      codePushStatusDidChange,
    );
  }, []);

  return null;
};

export default CodePushHandler;
