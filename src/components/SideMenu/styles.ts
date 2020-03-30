import styled from 'styled-components/native';

import {rhythm, colors, getTextShadow} from '../../styleConstants';

export const Container = styled.View`
  flex: 1;
  padding: ${rhythm.vt + 64}px ${rhythm.hz}px ${rhythm.vt * 2}px; /* header height */
  justify-content: space-between;
  align-items: center;
`;

export const VersionText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: ${colors.secondaryText};
  text-shadow: ${getTextShadow('dark')};
`;

export default {
  versionWrapper: {},
  versionContainer: {
    width: 240,
    height: 64,
    backgroundColor: 'transparent',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
