import React, {ReactNode} from 'react';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import styles, {Container} from './styles';
import {isMobile, getPagePadding} from '../../utils';

import HeaderBar from '../HeaderBar';
import TabBar from '../TabBar';
import PageBg from '../PageBg';
import {useOrientation} from '../useOrientation';

export interface PageProps {
  children?: ReactNode;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const Page = ({children, handleScroll}: PageProps) => {
  const orientation = useOrientation();

  return (
    <PageBg style={{...styles.wrapper, ...getPagePadding(orientation)}}>
      <HeaderBar />

      {isMobile() && orientation === 'LANDSCAPE' ? (
        <ScrollView
          bounces={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.container}
          contentContainerStyle={{
            ...styles.contentContainer,
            paddingHorizontal:
              orientation === 'LANDSCAPE' ? getStatusBarHeight() : 0,
          }}>
          {children}
        </ScrollView>
      ) : (
        <Container>{children}</Container>
      )}

      <TabBar />
    </PageBg>
  );
};

export default Page;
