import React from 'react';
import {DataMenuItemsType} from "../Header.tsx";
import {S} from "../StyledHeder.ts";
import {ScrollToAnchor} from "../../../components/scrollToAnchor/ScrollToAnchor.tsx";


type NavMenuPropsType = {
    menuItems: Array<DataMenuItemsType>
    onToggle?: ()=> void
}
export const NavMenu: React.FC<NavMenuPropsType> = (props: NavMenuPropsType) => {
    return (
        <S.MenuList>
            <ScrollToAnchor/>
            {props.menuItems.map((m, index)=> {
                return(
                    <S.MenuItem key={index}>
                        <S.Link to={m.id}
                                 onClick={props.onToggle}>
                                {m.title}
                        </S.Link>
                    </S.MenuItem>
                )
            })}
        </S.MenuList>
    );
};

