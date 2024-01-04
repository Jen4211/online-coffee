import React from 'react';
import {Icon} from "../../../components/icon/Icon.tsx";
import {NavMenu} from "../navMenu/NavMenu.tsx";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import styled from "styled-components";
import {DataMenuItemsType} from "../Header.tsx";
import {NavLink} from "react-router-dom";
import {path} from "../../pages/Pages.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Logo} from "../../../components/logo/Logo.tsx";

type DesktopMenuPropsType = {
    dataMenuItems: Array<DataMenuItemsType>
}
export const DesktopMenu: React.FC<DesktopMenuPropsType> = (props:DesktopMenuPropsType) => {
    return (
        <FlexContainer justify={"space-between"}>
            <Logo />
            <NavMenu menuItems={props.dataMenuItems}/>
            <HeaderLink to={path.MENU}>
                Menu
                <Icon iconId={"coffee-cup"}
                      width={"20px"}
                      height={"20px"}
                      viewBox={"0 0 20 20"}/>
            </HeaderLink>
        </FlexContainer>

    );
};


export const HeaderLink = styled(NavLink)`
  color: ${theme.colors.text.dark};
display: flex;
  align-items: center;
  column-gap: 8px;
 
  }
`