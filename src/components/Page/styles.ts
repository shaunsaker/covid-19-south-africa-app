import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

interface StyledScrollviewProps {
  isLandscape: boolean;
}

export default {
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {},
};
