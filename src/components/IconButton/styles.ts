import styled from 'styled-components/native';

import {colors, getMobileTextShadow} from '../../styleConstants';

export const Button = styled.TouchableOpacity``;

const ICON_BUTTON_SIZE = 40;

export default {
  iconContainer: {
    width: ICON_BUTTON_SIZE - 2,
    height: ICON_BUTTON_SIZE - 2,
    borderRadius: ICON_BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: colors.primaryLight,
  },
  icon: {
    fontSize: 20,
    color: colors.secondaryText,
    ...getMobileTextShadow('dark'),
  },
  image: {
    width: 24,
    height: 12,
    resizeMode: 'contain',
    marginBottom: 2,
    marginRight: 2,
  },
};
