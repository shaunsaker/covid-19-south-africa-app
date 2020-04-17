import styled from 'styled-components/native';

import {rhythm} from '../../../styleConstants';

export const CountryButtonContainer = styled.View`
  margin: ${rhythm.vt}px ${rhythm.hz}px;
`;

export const CountryImage = styled.Image`
  width: 24;
  height: 12;
  margin-bottom: 3px;
`;

export default {
  container: {},
  contentContainer: {
    alignItems: 'center',
  },
};
