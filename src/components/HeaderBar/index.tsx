import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setSideMenu} from '../../store/actions';
import {
  getCurrentScene,
  getSelectedCountrySelector,
} from '../../store/selectors';
import {tabs} from '../../config';
import HeaderBar, {ContainerProps} from './HeaderBar';
import {Actions} from 'react-native-router-flux';
import {getCountryImageUri} from '../../utils';

const HeaderBarContainer = ({...props}: ContainerProps) => {
  const dispatch = useDispatch();
  const currentScene = useSelector(getCurrentScene);
  const currentTab = tabs.filter(({sceneKey}) => sceneKey === currentScene)[0];
  const title = currentTab ? currentTab.title : 'CVD19ZA';
  const selectedCountryCode = useSelector(getSelectedCountrySelector).code;

  const onMenuPress = useCallback(() => {
    dispatch(setSideMenu(true));
  }, [dispatch]);

  const onClosePress = useCallback(() => {
    Actions.pop();
    dispatch(setSideMenu(false));
  }, [dispatch]);

  const onCountryPress = useCallback(() => {
    Actions.push('countries');
  }, []);

  return (
    <HeaderBar
      title={title}
      handleMenuPress={onMenuPress}
      handleClosePress={onClosePress}
      handleCountryPress={onCountryPress}
      showCountryIcon={getCountryImageUri(selectedCountryCode)}
      {...props}
    />
  );
};

export default HeaderBarContainer;
