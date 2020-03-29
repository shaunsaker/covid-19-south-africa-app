import styled from 'styled-components/native';

import {colors, rhythm} from '../../../src/styleConstants';

const PADDING = `${rhythm.vt}px ${rhythm.hz}px`;

export const Container = styled.View`
  padding: ${PADDING};
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: 64px;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  padding: ${PADDING};
`;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: ${colors.whiteText};
`;

export default {
  icon: {
    fontSize: 24,
    color: colors.whiteText,
  },
};
