import {useEffect, useCallback} from 'react';
import messaging from '@react-native-firebase/messaging';
import Snackbar from 'react-native-snackbar';

import {snackbar} from '../../config';

const NotificationsHandler = () => {
  const showSnackbar = useCallback((text: string) => {
    Snackbar.show({
      ...snackbar,
      text,
    });
  }, []);

  const handleNotifications = useCallback(async () => {
    try {
      await messaging().registerForRemoteNotifications();
    } catch (error) {
      showSnackbar(error.message);
    }

    const granted = await messaging().requestPermission();

    if (granted) {
      messaging().subscribeToTopic('confirmedCases');
    } else {
      showSnackbar('We need your permission to send you the latest updates.');
    }
  }, [showSnackbar]);

  useEffect(() => {
    if (!__DEV__) {
      handleNotifications();
    }
  });

  return null;
};

export default NotificationsHandler;
