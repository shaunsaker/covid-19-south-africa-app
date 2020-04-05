import styled from 'styled-components/native';

import {rhythm, colors, getTextShadow} from '../../styleConstants';

export const Container = styled.View`
  flex-direction: row;
  background-color: transparent;
`;

interface TabContainerProps {
  isActive: boolean;
}

export const TabContainer = styled.TouchableOpacity<TabContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${rhythm.vt}px ${rhythm.hz / 2}px;
  border-top-width: 4px;
  border-top-color: ${({isActive}) =>
    isActive ? colors.primaryText : colors.primaryLight};
`;

interface TabTextProps {
  isActive: boolean;
}

export const TabText = styled.Text<TabTextProps>`
  font-family: ${({isActive}) => (isActive ? 'Roboto-Bold' : 'Roboto')};
  font-size: 16px;
  color: ${({isActive}) =>
    isActive ? colors.primaryText : colors.secondaryText};
  text-shadow: ${getTextShadow('dark')};
`;

export default {
  contentContainer: {},
};
