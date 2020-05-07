import styled from 'styled-components/native';

import {colors, getTextShadow, rhythm} from '../../styleConstants';

const OPTION_WIDTH = 120;
const OPTION_HEIGHT = 30;
const BORDER_RADIUS = 10;

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${rhythm.vt}px;
`;

interface OptionContainerProps {
  isSelected: boolean;
}

export const OptionContainer = styled.TouchableOpacity<OptionContainerProps>`
  justify-content: center;
  align-items: center;
  width: ${OPTION_WIDTH}px;
  height: ${OPTION_HEIGHT}px;
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
  selectedOptionContainer: {
    width: OPTION_WIDTH,
    height: OPTION_HEIGHT,
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.primaryLight,
  },
};
