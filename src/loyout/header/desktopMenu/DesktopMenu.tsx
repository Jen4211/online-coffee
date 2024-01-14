import React from 'react';
import {NavMenu} from "../navMenu/NavMenu.tsx";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import {DataMenuItemsType} from "../Header.tsx";

import {Logo} from "../../../components/logo/Logo.tsx";
import {HeaderLinkDrinkMenu} from "../../../components/linkMenuDrinks/HeaderLinkDrinkMenu.tsx";

type DesktopMenuPropsType = {
    dataMenuItems: Array<DataMenuItemsType>
}
export const DesktopMenu: React.FC<DesktopMenuPropsType> = (props:DesktopMenuPropsType) => {
    return (
        <FlexContainer justify={"space-between"}>
            <Logo />
            <NavMenu menuItems={props.dataMenuItems}/>
            <HeaderLinkDrinkMenu />
        </FlexContainer>

    );
};


