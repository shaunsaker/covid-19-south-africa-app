import React, {ReactNode, useCallback} from 'react';
import {Linking, Animated, Share} from 'react-native';
import Snackbar from 'react-native-snackbar';
import SideMenu from 'react-native-side-menu';
import {useSelector, useDispatch} from 'react-redux';

import pkg from '../../../package.json';
import {build, email, snackbar, code, apkDownloadUrl} from '../../config';
import {sideMenuIsOpenSelector} from '../../store/selectors';
import {setSideMenu} from '../../store/actions';

import SideMenuComponent from './SideMenu';

interface Props {
  children: ReactNode;
}

const SideMenuContainer = ({children}: Props) => {
  const isOpen = useSelector(sideMenuIsOpenSelector);
  const version = `${pkg.version} (${build}) | ${code}`;
  const dispatch = useDispatch();

  const onSharePress = useCallback(() => {
    Share.share({
      message: 'Download CVD19ZA for the latest COVID-19 stats!',
      url: apkDownloadUrl,
    })
      .then()
      .catch((error) => {
        Snackbar.show({
          ...snackbar,
          text: error.message,
        });
      });
  }, []);

  const onGetInTouchPress = useCallback(() => {
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
  }, []);

  const onSideMenuChange = useCallback(
    (nextIsOpen: boolean) => {
      if (nextIsOpen !== isOpen) {
        dispatch(setSideMenu(nextIsOpen));
      }
    },
    [dispatch, isOpen],
  );

  return (
    <SideMenu
      menu={
        <SideMenuComponent
          version={version}
          handleSharePress={onSharePress}
          handleGetInTouchPress={onGetInTouchPress}
        />
      }
      isOpen={isOpen}
      onChange={onSideMenuChange}
      openMenuOffset={300}
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
