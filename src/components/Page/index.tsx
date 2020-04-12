import React from 'react';
import {NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Page, {PageProps} from './Page';
import {setHasScrolled} from '../../store/actions';
import {getPageHasScrolledSelector} from '../../store/selectors';

interface PageContainerProps extends PageProps {}

const PageContainer = ({...props}: PageContainerProps) => {
  const dispatch = useDispatch();
  const pageHasScrolled = useSelector(getPageHasScrolledSelector);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {y} = event.nativeEvent.contentOffset;

    if (y === 0 && pageHasScrolled) {
      dispatch(setHasScrolled(false));
    } else if (!pageHasScrolled) {
      dispatch(setHasScrolled(true));
    }
  };

  return <Page handleScroll={onScroll} {...props} />;
};

export default PageContainer;
