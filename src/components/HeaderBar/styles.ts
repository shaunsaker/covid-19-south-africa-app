import styled from 'styled-components/native';

import {
  colors,
  rhythm,
  getTextShadow,
  getMobileTextShadow,
} from '../../styleConstants';

const PADDING = `${rhythm.vt}px ${rhythm.hz}px`;

export const Container = styled.View`
  padding: ${PADDING};
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: 64px;
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  padding: ${PADDING};
`;

const ICON_BUTTON_SIZE = 40;

export const IconButton = styled.TouchableOpacity``;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: ${colors.whiteText};
  text-shadow: ${getTextShadow('dark')};
  padding: 4px; /* for shadow to show through */
`;

export default {
  iconButton: {
    width: ICON_BUTTON_SIZE,
    height: ICON_BUTTON_SIZE,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 4,
    backgroundColor: colors.primary,
  },
  icon: {
    fontSize: 24,
    color: colors.whiteText,
    ...getMobileTextShadow('dark'),
  },
};
