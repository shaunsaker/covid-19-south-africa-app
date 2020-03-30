import styled from 'styled-components/native';

import {colors, rhythm} from '../../../styleConstants';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: ${rhythm.vt}px ${rhythm.hz}px;
`;
