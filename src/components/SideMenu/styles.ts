import styled from 'styled-components/native';

import {rhythm, colors, getTextShadow, sizes} from '../../styleConstants';

export const Container = styled.View`
  flex: 1;
  border-right-width: 1px;
  border-right-color: ${colors.primaryLight};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: ${rhythm.vt}px ${rhythm.hz}px ${rhythm.vt * 2}px; /* header height */
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
    borderRadius: 10,
    width: sizes.elementWidth,
    height: sizes.elementHeight,
    backgroundColor: 'transparent',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
