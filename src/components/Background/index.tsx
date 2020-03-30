import React from 'react';

import Background from './Background';

interface Props {}

const BackgroundContainer = ({...props}: Props) => {
  return <Background {...props} />;
};

export default BackgroundContainer;
