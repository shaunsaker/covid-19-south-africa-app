import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';

import {rhythm, colors, sizes} from '../../../styleConstants';

export const InputContainer = styled.View`
  align-items: center;
  margin-bottom: ${rhythm.vt}px;
`;

export const CountryButtonContainer = styled.View`
  margin: ${rhythm.vt}px ${rhythm.hz}px;
`;

export const CountryImage = styled(FastImage)`
  width: 20px;
  height: 30px; /* any value greater than 20 fixes width to 20 with resizeMode='contain' */
  margin-bottom: 3px;
`;

export const RecentlySelectedContainer = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${colors.primaryLight};
  padding-bottom: ${rhythm.vt / 2}px;
  margin-bottom: ${rhythm.vt}px;
  width: ${sizes.elementWidth}px;
  align-self: center;
`;

export const RecentlySelectedText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 14px;
  color: ${colors.secondaryText};
  margin-bottom: ${rhythm.vt / 2}px;
`;

export const RecentlySelectedIconButton = styled.TouchableOpacity``;

export const RecentlySelectedIcon = styled(Icon)`
  font-size: 24px;
  color: ${colors.primaryText};
`;

export default {
  container: {},
  contentContainer: {
    alignItems: 'center',
  },
};
