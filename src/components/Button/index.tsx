import React from 'react';

import Button, {Props} from './Button';

const ButtonContainer = ({...props}: Props) => {
  return <Button {...props} />;
};

export default ButtonContainer;
