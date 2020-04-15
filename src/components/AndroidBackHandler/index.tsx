import {useEffect, useCallback} from 'react';
import {BackHandler} from 'react-native';

const AndroidBackHandler = () => {
  const onHardwareBackPress = useCallback(() => {
    BackHandler.exitApp();

    return false;
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onHardwareBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onHardwareBackPress);
    };
  });

  return null;
};

export default AndroidBackHandler;
