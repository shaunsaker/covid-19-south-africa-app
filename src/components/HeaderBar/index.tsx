import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setSideMenu} from '../../store/actions';
import {getCurrentScene} from '../../store/selectors';
import {tabs} from '../../config';
import HeaderBar, {ContainerProps} from './HeaderBar';

const HeaderBarContainer = ({...props}: ContainerProps) => {
  const dispatch = useDispatch();
  const currentScene = useSelector(getCurrentScene);
  const currentTab = tabs.filter(({sceneKey}) => sceneKey === currentScene)[0];
  const title = currentTab ? currentTab.title : 'CVD19ZA';

  const onMenuPress = () => {
    dispatch(setSideMenu(true));
  };

  const onClosePress = () => {
    dispatch(setSideMenu(false));
  };

  return (
    <HeaderBar
      title={title}
      handleMenuPress={onMenuPress}
      handleClosePress={onClosePress}
      {...props}
    />
  );
};

export default HeaderBarContainer;
