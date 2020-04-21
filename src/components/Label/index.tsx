import React, {ReactNode} from 'react';

import {Container, Text, StyledIcon} from './styles';

export interface Props {
  iconName?: string;
  children: ReactNode;
}

export const Label = ({iconName, children}: Props) => {
  return (
    <Container>
      {iconName ? <StyledIcon name={iconName} /> : null}

      <Text>{children}</Text>
    </Container>
  );
};
