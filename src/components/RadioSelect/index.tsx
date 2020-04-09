import React from 'react';

import RadioSelect, {RadioSelectProps} from './RadioSelect';

const RadioSelectContainer = ({...props}: RadioSelectProps) => {
  return <RadioSelect {...props} />;
};

export default RadioSelectContainer;
