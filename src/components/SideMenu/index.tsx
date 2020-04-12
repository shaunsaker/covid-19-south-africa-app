import React, {ReactNode} from 'react';
import {Linking, Animated} from 'react-native';
import Snackbar from 'react-native-snackbar';
import SideMenu from 'react-native-side-menu';
import {useSelector, useDispatch} from 'react-redux';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import pkg from '../../../package.json';
import {build, email, snackbar, code} from '../../config';
import {sideMenuIsOpenSelector} from '../../store/selectors';
import {setSideMenu} from '../../store/actions';
import {isMobile, getPagePadding} from '../../utils';

import SideMenuComponent from './SideMenu';
import {useOrientation} from '../useOrientation';

interface Props {
  children: ReactNode;
}

const SideMenuContainer = ({children}: Props) => {
  const isOpen = useSelector(sideMenuIsOpenSelector);
  const version = `${pkg.version} (${build}) | ${code}`;
  const dispatch = useDispatch();
  const orientation = useOrientation();

  const onGetInTouchPress = () => {
    const url = `mailto:${email}`;

    Linking.canOpenURL(url)
      .then(() => {
        Linking.openURL(url);
      })
      .catch((error) => {
        Snackbar.show({
          ...snackbar,
          text: error.message,
        });
      });
  };

  const onSideMenuChange = (nextIsOpen: boolean) => {
    if (nextIsOpen !== isOpen) {
      dispatch(setSideMenu(nextIsOpen));
    }
  };

  return (
    <SideMenu
      menu={
        <SideMenuComponent
          version={version}
          style={{
            ...getPagePadding(orientation),
          }}
          handleGetInTouchPress={onGetInTouchPress}
        />
      }
      isOpen={isOpen}
      onChange={onSideMenuChange}
      openMenuOffset={
        isMobile() && orientation === 'LANDSCAPE'
          ? 300 + getStatusBarHeight()
          : 300
      }
      bounceBackOnOverdraw={false}
      animationFunction={(prop: any, value: any) =>
        Animated.spring(prop, {
          toValue: value,
          friction: 20,
          useNativeDriver: true,
        })
      }>
      {children}
    </SideMenu>
  );
};

export default SideMenuContainer;
