import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import HeaderBar, {HeaderBarProps} from './HeaderBar';
import {setSideMenu} from '../../store/actions';
import {getPageHasScrolledSelector} from '../../store/selectors';

export interface HeaderBarContainerProps
  extends Omit<
    HeaderBarProps,
    'showShadow' | 'handleMenuPress' | 'handleClosePress'
  > {}

const HeaderBarContainer = ({...props}: HeaderBarContainerProps) => {
  const dispatch = useDispatch();
  const pageHasScrolled = useSelector(getPageHasScrolledSelector);

  const onMenuPress = () => {
    dispatch(setSideMenu(true));
  };

  const onClosePress = () => {
    dispatch(setSideMenu(false));
  };

  return (
    <HeaderBar
      {...props}
      showShadow={pageHasScrolled}
      handleMenuPress={onMenuPress}
      handleClosePress={onClosePress}
    />
  );
};

export default HeaderBarContainer;
