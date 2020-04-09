import styled from 'styled-components/native';

import {colors, getTextShadow, rhythm} from '../../styleConstants';

const OPTION_WIDTH = 120;
const OPTION_HEIGHT = 30;
const BORDER_RADIUS = 10;

interface OptionContainerProps {
  isSelected: boolean;
}

export const OptionContainer = styled.TouchableOpacity<OptionContainerProps>`
  width: ${OPTION_WIDTH}px;
  height: ${OPTION_HEIGHT}px;
  justify-content: center;
  align-items: center;
  background-color: ${({isSelected}) =>
    isSelected ? colors.primaryLight : 'transparent'};
  border-radius: ${BORDER_RADIUS}px;
  margin: ${BORDER_RADIUS / 2}px;
`;

interface OptionTextProps {
  isSelected: boolean;
}

export const OptionText = styled.Text<OptionTextProps>`
  font-family: ${({isSelected}) =>
    isSelected ? 'Roboto-Bold' : 'Roboto-Regular'};
  font-size: 16px;
  color: ${({isSelected}) =>
    isSelected ? colors.primaryText : colors.secondaryText};
  text-shadow: ${getTextShadow('dark')};
`;

export default {
  wrapper: {
    alignSelf: 'center',
    borderRadius: BORDER_RADIUS,
    marginBottom: rhythm.vt,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: (OPTION_WIDTH + BORDER_RADIUS) * 2,
    height: OPTION_HEIGHT + BORDER_RADIUS,
    backgroundColor: 'transparent',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
};
