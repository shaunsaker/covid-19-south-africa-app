import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';

import {colors, rhythm, getTextShadow} from '../../styleConstants';

const PADDING_TOP = rhythm.vt;
const PADDING = `${PADDING_TOP}px ${rhythm.hz}px`;

export const Container = styled.View`
  padding: ${PADDING};
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 3 : 0}px;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

export const LeftIconContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  padding: ${PADDING};
`;

export const RightIconContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  padding: ${PADDING};
`;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: ${colors.primaryText};
  text-shadow: ${getTextShadow('dark')};
  padding: 4px; /* for shadow to show through */
`;

export default {};
