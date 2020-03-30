import styled from 'styled-components/native';

import {colors, getMobileTextShadow} from '../../styleConstants';

export const Button = styled.TouchableOpacity``;

const ICON_BUTTON_SIZE = 40;

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
