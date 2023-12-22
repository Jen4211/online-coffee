import React from 'react';
import styled from "styled-components";

import {FlexContainer} from "../../components/FlexContainer.ts";
import {Icon} from "../../components/icon/Icon.tsx";
import {NavMenu} from "./navMenu/NavMenu.tsx";

export type DataMenuItems = {
    title: string
    id: string
}

const dataMenuItems: Array<DataMenuItems> = [
    {title:"Favorite coffee", id:"coffee"},
    {title:"About", id:"about"},
    {title:"Mobile app", id:"app"},
    {title:"Contact us", id:"contact"}
]
export const Header: React.FC = () => {
    return (
        <StyledHeader>
                <FlexContainer justify={"space-between"}>
                    <Icon iconId={"logo"}
                          width={"100px"}
                          height={"60px"}
                          viewBox={"0 0 100 60"}/>
                    <NavMenu menuItems={dataMenuItems}/>
                    <HeaderLink>
                        Menu
                        <Icon iconId={"coffee-cup"}
                        width={"20px"}
                        height={"20px"}
                        viewBox={"0 0 20 20"}/>
                    </HeaderLink>
                </FlexContainer>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    
`
const HeaderLink = styled.a`
display: flex;
  align-items: center;
  column-gap: 8px;
`