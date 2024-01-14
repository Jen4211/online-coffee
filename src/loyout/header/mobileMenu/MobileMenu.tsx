import React, {useState} from 'react';
import {DataMenuItemsType} from "../Header.tsx";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import {Button} from "../../../components/button/Button.ts";
import styled, {css} from "styled-components";
import {NavMenu} from "../navMenu/NavMenu.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Logo} from "../../../components/logo/Logo.tsx";
import {HeaderLinkDrinkMenu} from "../../../components/linkMenuDrinks/HeaderLinkDrinkMenu.tsx";

type MobileMenuPropsType = {
    dataMenuItems: Array<DataMenuItemsType>
}
export const MobileMenu: React.FC<MobileMenuPropsType> = (props: MobileMenuPropsType) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggle = () => setIsOpen(!isOpen)

    return (
        <StyledMobileMenu>
            <FlexContainer justify={"space-between"} align={"center"}>
               <Logo />
                <Button onClick={onToggle}>
                    <span></span>
                    <span></span>
                </Button>
                <MobileMenuPopup isOpen={isOpen}>
                    <HeaderPopup>
                        <Logo onToggle={onToggle} />
                        <Button onClick={onToggle}>
                            <span></span>
                        </Button>
                    </HeaderPopup>
                    <NavMenu menuItems={props.dataMenuItems} onToggle={onToggle}/>
                    <HeaderLinkDrinkMenu />
                </MobileMenuPopup>
            </FlexContainer>
        </StyledMobileMenu>

    );
};


const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${theme.colors.background.body};
  padding: 20px 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-1000px);
  transition: 1s ease-in-out;

  z-index: 100;

  ul{
    flex-direction: column;
    row-gap: 60px;
    margin-bottom: 100px;
  }

  
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
  `}
  
  @media ${theme.media.mobile} {
  padding: 20px 16px 60px;
}
`

const StyledMobileMenu = styled.div`
  width: 100%;
  position: relative;

  ${Button} {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 44px;
    height: 44px;
    justify-content: center;
    align-items: center;

    span {
      width: 16px;
      height: 1px;
      background-color: ${theme.colors.text.dark};
    }
  }

`
const HeaderPopup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  
  ${Button}{
    span{
      transform: rotate(45deg);
      position: relative;
      
      &::before{
        content: "";
        display: inline-block;
        position: absolute;
        width: 16px;
        height: 1px;
        background-color: ${theme.colors.text.dark};
        transform: rotate(90deg);
        right: 8px;
        left: 0;
        
      }
    }
    
  } 
`