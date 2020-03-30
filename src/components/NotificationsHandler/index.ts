import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import Snackbar from 'react-native-snackbar';

import {snackbar} from '../../config';

const NotificationsHandler = () => {
  const showSnackbar = (text: string) => {
    Snackbar.show({
      ...snackbar,
      text,
    });
  };

  const handleNotifications = async () => {
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
  };

  useEffect(() => {
    handleNotifications();
  }, []);

  return null;
};

export default NotificationsHandler;
