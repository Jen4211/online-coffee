import React from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";
import {DataMenuItems} from "../Header.tsx";
import {theme} from "../../../styles/Theme.ts";

type NavMenuPropsType = {
    menuItems: Array<DataMenuItems>
}
export const NavMenu: React.FC<NavMenuPropsType> = (props: NavMenuPropsType) => {
    return (
        <MenuList>
            {props.menuItems.map((m, index)=> {
                return(
                    <MenuItem key={index}>
                        <NavLink to={m.id}
                                 smooth={true}
                                 spy={true}
                                 activeClass="active">
                            {m.title}</NavLink>
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
const NavLink = styled(Link)`
position: relative;
  &:hover {
    &::before, &.active{
      content: "";
      width: 100%;
      height: 2px;
      bottom: 0;
      background-color: ${theme.colors.background.container};
      position: absolute;
    }
  }
`