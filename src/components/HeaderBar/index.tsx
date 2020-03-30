import React from 'react';

import HeaderBar, {ContainerProps} from './HeaderBar';

const HeaderBarContainer = ({...props}: ContainerProps) => {
  const onMenuPress = () => {};

  const onClosePress = () => {};

  return (
    <HeaderBar
      {...props}
      handleMenuPress={onMenuPress}
      handleClosePress={onClosePress}
    />
  );
};

export default HeaderBarContainer;
