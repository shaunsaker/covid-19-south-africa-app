import React, {ReactNode} from 'react';

import {Container, Text} from './styles';

export interface Props {
  children: ReactNode;
}

export const Label = ({children}: Props) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};
