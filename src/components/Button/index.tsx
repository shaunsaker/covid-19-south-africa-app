import React from 'react';

import Button from './Button';

interface Props {}

const ButtonContainer = ({...props}: Props) => {
  return <Button {...props} />;
};

export default ButtonContainer;
