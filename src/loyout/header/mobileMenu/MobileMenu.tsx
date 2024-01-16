import React, {useState} from 'react';
import {DataMenuItemsType} from "../Header.tsx";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import {Button} from "../../../components/button/Button.ts";
import {NavMenu} from "../navMenu/NavMenu.tsx";
import {Logo} from "../../../components/logo/Logo.tsx";
import {HeaderLinkDrinkMenu} from "../../../components/linkMenuDrinks/HeaderLinkDrinkMenu.tsx";
import {S} from "../StyledHeder.ts";

type MobileMenuPropsType = {
    dataMenuItems: Array<DataMenuItemsType>
}
export const MobileMenu: React.FC<MobileMenuPropsType> = (props: MobileMenuPropsType) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggle = () => setIsOpen(!isOpen)

    return (
        <S.MobileMenu>
            <FlexContainer justify={"space-between"} align={"center"}>
               <Logo />
                <Button onClick={onToggle}>
                    <span></span>
                    <span></span>
                </Button>
                <S.MobileMenuPopup isOpen={isOpen}>
                    <S.HeaderPopup>
                        <Logo onToggle={onToggle} />
                        <Button onClick={onToggle}>
                            <span></span>
                        </Button>
                    </S.HeaderPopup>
                    <NavMenu menuItems={props.dataMenuItems} onToggle={onToggle}/>
                    <HeaderLinkDrinkMenu />
                </S.MobileMenuPopup>
            </FlexContainer>
        </S.MobileMenu>

    );
};


