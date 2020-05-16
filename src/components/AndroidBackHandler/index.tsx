import {useEffect, useCallback} from 'react';
import {BackHandler} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {sideMenuIsOpenSelector} from '../../store/selectors';
import {setSideMenu} from '../../store/actions';

const AndroidBackHandler = () => {
  const sideMenuOpen = useSelector(sideMenuIsOpenSelector);
  const dispatch = useDispatch();

  const onHardwareBackPress = useCallback(() => {
    if (sideMenuOpen) {
      dispatch(setSideMenu(false));
      return true;
    } else {
      BackHandler.exitApp();
      return false;
    }
  }, [dispatch, sideMenuOpen]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onHardwareBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onHardwareBackPress);
    };
  });

  return null;
};

export default AndroidBackHandler;
