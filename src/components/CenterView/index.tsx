import React, {ReactNode} from 'react';

import {Container} from './styles';

interface CenterViewProps {
  children: ReactNode;
}

const CenterView = ({children}: CenterViewProps) => {
  return <Container>{children}</Container>;
};

export default CenterView;
