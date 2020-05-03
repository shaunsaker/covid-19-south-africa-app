import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getVersionUpdate} from '../../store/actions';
import {getVersionUpdateSelector} from '../../store/selectors';
import {version} from '../../../package.json';
import {Alert, Linking, Platform} from 'react-native';
import {apkDownloadUrl} from '../../config';

const RequestUpdateHandler = () => {
  const dispatch = useDispatch();
  const versionUpdate = useSelector(getVersionUpdateSelector);

  const requestUpdate = useCallback(() => {
    Alert.alert(
      `Update Available: v${versionUpdate}`,
      'Please download the latest version of the app to get new features.',
      [
        {
          text: 'Later',
          style: 'cancel',
        },
        {text: 'Download', onPress: () => Linking.openURL(apkDownloadUrl)},
      ],
      {cancelable: false},
    );
  }, [versionUpdate]);

  useEffect(() => {
    // The only way to download the new app on iOS is via email
    if (__DEV__ || Platform.OS === 'android') {
      dispatch(getVersionUpdate());
    }
  }, [dispatch]);

  useEffect(() => {
    if (versionUpdate && versionUpdate > version) {
      requestUpdate();
    }
  }, [versionUpdate, requestUpdate]);

  return null;
};

export default RequestUpdateHandler;
