import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme.ts';

type ButtonPropsType = {
  padding?: string;
  background?: string;
  color?: string;
  active?: boolean;
};
export const Button = styled.button<ButtonPropsType>`
  padding: ${(props) => props.padding || '20px 20px'};
  background-color: ${(props) => props.background || '#E1D4C9'};
  border-radius: 100px;
  text-align: center;
  color: ${(props) => props.color || '#403F3D'};
  border: 1px solid;

  ${(props) =>
    props.active &&
    css<ButtonPropsType>`
      background-color: ${theme.colors.background.container};
      color: ${theme.colors.text.light};
    `}
`;
