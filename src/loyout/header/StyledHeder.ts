import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Button} from "../../components/button/Button.ts";
import {NavLink} from "react-router-dom";

const Header = styled.header`
  margin-bottom: 20px;
`
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

  ul {
    flex-direction: column;
    row-gap: 60px;
    margin-bottom: 100px;
  }


  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
  `} @media ${theme.media.mobile} {
  padding: 20px 16px 60px;
}
`

const MobileMenu = styled.div`
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

  ${Button} {
    span {
      transform: rotate(45deg);
      position: relative;

      &::before {
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
const MenuList = styled.ul`
  display: flex;
  column-gap: 40px;
  align-items: center;


`
const MenuItem = styled.li`

`
const Link = styled(NavLink)`
  position: relative;
  color: ${theme.colors.text.dark};

  &:hover, &.active {
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      bottom: 0;
      background-color: ${theme.colors.text.dark};
      position: absolute;
    }
  }
`
export const S = {
    Header,
    HeaderPopup,
    MobileMenu,
    MobileMenuPopup,
    MenuList,
    MenuItem,
    Link
}