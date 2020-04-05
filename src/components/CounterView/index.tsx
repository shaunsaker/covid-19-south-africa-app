import React from 'react';

import CounterView, {Props} from './CounterView';

const CounterViewContainer = ({...props}: Props) => {
  return <CounterView {...props} />;
};

export default CounterViewContainer;
