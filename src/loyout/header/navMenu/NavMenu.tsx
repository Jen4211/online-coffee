import React from 'react';
import styled from "styled-components";
import { DataMenuItemsType} from "../Header.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Link} from "react-router-dom";
import {path} from "../../pages/Pages.tsx";

type NavMenuPropsType = {
    menuItems: Array<DataMenuItemsType>
    onToggle?: ()=> void
}
export const NavMenu: React.FC<NavMenuPropsType> = (props: NavMenuPropsType) => {
    return (
        <MenuList>
            {props.menuItems.map((m, index)=> {
                return(
                    <MenuItem key={index}>
                        <Link to={path.MAIN}>
                            <NavLink

                                     onClick={props.onToggle}>
                                {m.title}</NavLink>
                        </Link>

                    </MenuItem>
                )
            })}

        </MenuList>
    );
};

const MenuList = styled.ul`
display: flex;
  column-gap: 40px;
  align-items: center;
  

`
const MenuItem = styled.li`

`
const NavLink = styled.a`
position: relative;
  color: ${theme.colors.text.dark};
  &:hover {
    &::before, &.active{
      content: "";
      width: 100%;
      height: 2px;
      bottom: 0;
      background-color: ${theme.colors.text.dark};
      position: absolute;
    }
  }
`