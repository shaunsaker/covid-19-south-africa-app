import styled from 'styled-components/native';

import {colors, getTextShadow} from '../../styleConstants';

export const Button = styled.TouchableOpacity``;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: ${colors.primaryText};
  text-shadow: ${getTextShadow('dark')};
  padding: 4px; /* for shadow to show through */
`;

const WIDTH = 240;
const HEIGHT = 64;
const BORDER_RADIUS = 10;

export default {
  buttonWrapper: {
    width: WIDTH,
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.secondaryDark,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  buttonContainer: {
    width: WIDTH - 2,
    height: HEIGHT - 2,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
