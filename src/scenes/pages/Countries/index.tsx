import React from 'react';

import Countries, {Props} from './Countries';

/*
 * TODO: Use country-list
 */
const CountriesContainer = ({...props}: Props) => {
  return <Countries {...props} />;
};

export default CountriesContainer;
