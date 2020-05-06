import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {colors, rhythm, getTextShadow} from '../../styleConstants';

export const Container = styled.View`
  background-color: rgba(23, 25, 29, 0.75);
  border-radius: 10px;
  padding: ${rhythm.vt / 2}px ${rhythm.hz / 2.5}px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 12px;
  color: ${colors.primaryText};
  text-shadow: ${getTextShadow('dark')};
`;

export const StyledIcon = styled(Icon)`
  font-size: 12px;
  color: ${colors.primaryText};
  text-shadow: ${getTextShadow('dark')};
  margin-left: -4px;
  margin-right: 2px;
`;

export default {};
