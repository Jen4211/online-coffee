import React from 'react';
import styled from "styled-components";

type NavMenuPropsType = {
    menuItems: Array<string>
}
export const NavMenu: React.FC<NavMenuPropsType> = (props: NavMenuPropsType) => {
    return (
        <MenuList>
            {props.menuItems.map((m, index)=> {
                return(
                    <MenuItem key={index}>
                        <NavLink>{m}</NavLink>
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

`