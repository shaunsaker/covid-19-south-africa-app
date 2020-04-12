import styled from 'styled-components/native';

import {colors, rhythm, getTextShadow} from '../../styleConstants';

const PADDING_HZ = rhythm.hz;

interface ContainerProps {
  showShadow?: boolean;
}

export const Container = styled.View<ContainerProps>`
  padding: ${rhythm.vt}px ${PADDING_HZ}px;
  justify-content: center;
  align-items: center;
  background-color: ${({showShadow}) =>
    showShadow ? colors.primaryLight : 'transparent'};
  box-shadow: ${({showShadow}) =>
    showShadow ? '0 5px 15px rgba(0, 0, 0, 0.15)' : 'none'};
`;

export const LeftIconContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${PADDING_HZ}px;
  justify-content: center;
`;

export const RightIconContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${PADDING_HZ}px;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: ${colors.primaryText};
  text-shadow: ${getTextShadow('dark')};
  padding: 4px; /* for shadow to show through */
`;

export default {};
