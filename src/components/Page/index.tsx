import React from 'react';

import Page, {PageProps} from './Page';

const PageContainer = ({...props}: PageProps) => {
  return <Page {...props} />;
};

export default PageContainer;
