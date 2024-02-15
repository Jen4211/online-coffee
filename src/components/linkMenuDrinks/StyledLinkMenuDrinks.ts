import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles/Theme.ts';

const HeaderLinkDrinkMenu = styled(NavLink)`
  display: flex;
  align-items: center;
`;
const WrapLinkDrinkMenu = styled.div`
  color: ${theme.colors.text.dark};
  display: flex;
  column-gap: 8px;
  position: relative;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 1px;
      background-color: ${theme.colors.text.dark};
      height: 2px;
    }
  }
`;
export const S = {
  HeaderLinkDrinkMenu,
  WrapLinkDrinkMenu,
};
