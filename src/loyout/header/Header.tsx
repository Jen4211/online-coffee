import React from 'react';
import styled from "styled-components";
import {DesktopMenu} from "./desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

export type DataMenuItemsType = {
    title: string
    id: string
}

const dataMenuItems: Array<DataMenuItemsType> = [
    {title: "Favorite coffee", id: "/main#coffee"},
    {title: "About", id: "/main#about"},
    {title: "Mobile app", id: "/main#app"},
    {title: "Contact us", id: "/main#contact"}
]
export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])
        return (
        <StyledHeader>
            {width > breakpoint ? <DesktopMenu dataMenuItems={dataMenuItems}/>
                                : <MobileMenu dataMenuItems={dataMenuItems}/>}
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  margin-bottom: 20px;
`
