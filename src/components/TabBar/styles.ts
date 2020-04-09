import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {rhythm, colors, getTextShadow} from '../../styleConstants';

const isTablet = Dimensions.get('window').width >= 768;

export const Container = styled.View`
  flex-direction: row;
  background-color: transparent;
`;

interface TabContainerProps {
  isActive: boolean;
}

const TAB_HEIGHT = isTablet ? 64 : 44;

export const TabContainer = styled.TouchableOpacity<TabContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${TAB_HEIGHT}px;
  padding: 0 ${rhythm.hz / 4}px;
  border-top-width: 1px;
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
  wrapper: {},
  container: {
    width: Dimensions.get('window').width,
    height: TAB_HEIGHT,
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
};
