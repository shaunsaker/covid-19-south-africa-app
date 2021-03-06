import styled from 'styled-components/native';

import {colors, getTextShadow, rhythm, sizes} from '../../styleConstants';

const WIDTH = sizes.elementWidth;
const HEIGHT = sizes.elementHeight;
const BORDER_RADIUS = 10;

interface ButtonProps {
  withAdditionalComponent: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${WIDTH - 2}px;
  height: ${HEIGHT - 2}px;
  justify-content: center;
  align-items: center;
  padding: ${rhythm.vt / 2}px
    ${({withAdditionalComponent}) =>
      withAdditionalComponent ? 20 + rhythm.hz / 2 : rhythm.hz / 2}px;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: ${colors.primaryText};
  text-shadow: ${getTextShadow('dark')};
  padding: 4px; /* for shadow to show through */
`;

export const LeftComponentContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${rhythm.hz / 2}px;
  justify-content: center;
`;

export const RightComponentContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${rhythm.hz / 2}px;
  justify-content: center;
`;

export default {
  buttonWrapper: {
    width: WIDTH,
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.secondaryLight,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  buttonContainer: {
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.secondary,
  },
};
