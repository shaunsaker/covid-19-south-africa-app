import React from 'react';

import TabPage, {TabPageProps} from './TabPage';

const TabTabPageContainer = ({...props}: TabPageProps) => {
  return <TabPage {...props} />;
};

export default TabTabPageContainer;
