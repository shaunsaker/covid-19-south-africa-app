import styled from 'styled-components/native';

import {colors, rhythm} from '../../../styleConstants';

export const ContentContainer = styled.View`
  flex: 1;
  padding: ${rhythm.vt}px ${rhythm.hz}px;
`;

export default {
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
};
