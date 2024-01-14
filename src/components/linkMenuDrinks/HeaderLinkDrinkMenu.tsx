import React from 'react';
import {path} from "../../loyout/pages/Pages.tsx";
import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {theme} from "../../styles/Theme.ts";

export const HeaderLinkDrinkMenu: React.FC = () => {
    return (
        <StyledHeaderLinkDrinkMenu to={path.MENU}>
            <WrapLinkDrinkMenu>Menu
                <Icon iconId={"coffee-cup"}
                      width={"20px"}
                      height={"20px"}
                      viewBox={"0 0 20 20"}/>
            </WrapLinkDrinkMenu>
        </StyledHeaderLinkDrinkMenu>
    );
};

const StyledHeaderLinkDrinkMenu = styled(Link)`
  display: flex;
  align-items: center;
`
const WrapLinkDrinkMenu = styled.div`
  color: ${theme.colors.text.dark};
  display: flex;
  column-gap: 8px;
  position: relative;
  
  &:hover{
    &::before{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 1px;
      background-color: ${theme.colors.text.dark};
      height: 2px;
    }  
  }
`