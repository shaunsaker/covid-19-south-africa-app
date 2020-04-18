import styled from 'styled-components/native';

import {rhythm, colors, sizes} from '../../../styleConstants';

export const InputContainer = styled.View`
  align-items: center;
  margin-bottom: ${rhythm.vt}px;
`;

export const CountryButtonContainer = styled.View`
  margin: ${rhythm.vt}px ${rhythm.hz}px;
`;

export const CountryImage = styled.Image`
  width: 20;
  height: 30; /* any value greater than 20 fixes width to 20 with resizeMode='contain' */
  margin-bottom: 3px;
`;

export const RecentlySelectedContainer = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${colors.primaryLight};
  padding-bottom: ${rhythm.vt / 2}px;
  margin-bottom: ${rhythm.vt}px;
  width: ${sizes.elementWidth};
  align-self: center;
`;

export const RecentlySelectedText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 14px;
  color: ${colors.secondaryText};
  margin-bottom: ${rhythm.vt / 2}px;
`;

export default {
  container: {},
  contentContainer: {
    alignItems: 'center',
  },
};
