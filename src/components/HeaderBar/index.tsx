import React, {useCallback} from 'react';
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

  const onMenuPress = useCallback(() => {
    dispatch(setSideMenu(true));
  }, [dispatch]);

  const onClosePress = useCallback(() => {
    dispatch(setSideMenu(false));
  }, [dispatch]);

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
