import {useEffect, useCallback} from 'react';
import {BackHandler} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {sideMenuIsOpenSelector, getCurrentScene} from '../../store/selectors';
import {setSideMenu} from '../../store/actions';

const AndroidBackHandler = () => {
  const sideMenuOpen = useSelector(sideMenuIsOpenSelector);
  const currentScene = useSelector(getCurrentScene);
  const isNotTabScene = !currentScene.includes('_');
  const dispatch = useDispatch();

  const onHardwareBackPress = useCallback(() => {
    if (sideMenuOpen) {
      dispatch(setSideMenu(false));
      return true;
    } else if (isNotTabScene) {
      Actions.pop();
      return true;
    } else {
      BackHandler.exitApp();
      return false;
    }
  }, [dispatch, sideMenuOpen, isNotTabScene]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onHardwareBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onHardwareBackPress);
    };
  });

  return null;
};

export default AndroidBackHandler;
