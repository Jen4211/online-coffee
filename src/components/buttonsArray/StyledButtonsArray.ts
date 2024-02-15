import styled from 'styled-components';
import { Button } from '../button/Button.ts';
import { theme } from '../../styles/Theme.ts';
import { IconWrap } from '../../loyout/section/drinkMenu/StyledDrinkMenu.ts';

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 8px;


  ${Button} {
    width: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    column-gap: 8px;
    border-color: ${theme.colors.border.light};

    ${IconWrap} {
      color: ${theme.colors.text.dark}
    }

    &:hover {
      ${IconWrap} {
        background-color: ${theme.colors.background.body};
      }
    }
`;
export const S = {
  OptionContainer,
  ButtonContainer,
};
