import React, {ReactNode} from 'react';
import {Linking} from 'react-native';
import Snackbar from 'react-native-snackbar';
import SideMenu from 'react-native-side-menu';

import pkg from '../../../package.json';
import {build, email, snackbar} from '../../config';

import SideMenuComponent from './SideMenu';

interface Props {
  children: ReactNode;
}

const SideMenuContainer = ({children}: Props) => {
  const version = `${pkg.version} (${build})`;

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

  const onSideMenuChange = () => {};

  return (
    <SideMenu
      menu={
        <SideMenuComponent
          version={version}
          handleGetInTouchPress={onGetInTouchPress}
        />
      }
      isOpen
      onChange={onSideMenuChange}
      openMenuOffset={300}
      bounceBackOnOverdraw={false}>
      {children}
    </SideMenu>
  );
};

export default SideMenuContainer;
