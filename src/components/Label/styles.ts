import styled from 'styled-components/native';

import {colors, rhythm, getTextShadow} from '../../styleConstants';

export const Container = styled.View`
  background-color: ${colors.primaryMedium};
  border-radius: 10px;
  padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
  display: flex;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: ${colors.primaryText};
  text-shadow: ${getTextShadow('dark')};
`;

export default {};
