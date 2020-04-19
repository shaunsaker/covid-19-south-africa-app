import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {sizes, colors, rhythm} from '../../styleConstants';

export const StyledTextInput = styled.TextInput`
  flex: 1;
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: ${colors.primaryText};
  padding: ${rhythm.vt}px 0 ${rhythm.vt + 2}px;
  padding-right: ${rhythm.hz / 2}px;
`;

export const StyledIcon = styled(Icon)`
  font-size: 24px;
  color: ${colors.secondaryText};
  margin-right: ${rhythm.hz / 2}px;
`;

export default {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rhythm.hz / 2,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: sizes.elementWidth,
    height: sizes.elementHeight,
  },
};
