import React from 'react';
import {useDispatch} from 'react-redux';

import {setSideMenu} from '../../store/actions';

import HeaderBar, {ContainerProps} from './HeaderBar';

const HeaderBarContainer = ({...props}: ContainerProps) => {
  const dispatch = useDispatch();

  const onMenuPress = () => {
    dispatch(setSideMenu(true));
  };

  const onClosePress = () => {
    dispatch(setSideMenu(false));
  };

  return (
    <HeaderBar
      {...props}
      handleMenuPress={onMenuPress}
      handleClosePress={onClosePress}
    />
  );
};

export default HeaderBarContainer;
