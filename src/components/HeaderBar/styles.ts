import styled from 'styled-components/native';

import {
  colors,
  rhythm,
  getTextShadow,
  getMobileTextShadow,
  shadows,
} from '../../styleConstants';

const PADDING = `${rhythm.vt}px ${rhythm.hz}px`;

export const Container = styled.View`
  padding: ${PADDING};
  justify-content: center;
  align-items: center;
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
  color: ${colors.primaryText};
  text-shadow: ${getTextShadow('dark')};
  padding: 4px; /* for shadow to show through */
`;

export default {
  iconButton: {
    width: ICON_BUTTON_SIZE,
    height: ICON_BUTTON_SIZE,
    borderRadius: ICON_BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  iconContainer: {
    width: ICON_BUTTON_SIZE - 2,
    height: ICON_BUTTON_SIZE - 2,
    borderRadius: ICON_BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: colors.secondaryText,
    ...getMobileTextShadow('dark'),
  },
};
