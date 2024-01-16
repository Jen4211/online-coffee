import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {FlexContainer} from "../../components/FlexContainer.ts";

const Footer = styled.footer`
  width: 100%;
  padding: 100px;
  background-color: ${theme.colors.background.container};
  border-radius: 40px;
  
  @media ${theme.media.smallDesktop} {
    padding: 100px 60px;
  }

  ${FlexContainer} {
    gap: 100px;
  }
`

const SocialNetWorkWrap = styled.div`
  max-width: 530px;
  width: 100%;
`
const SocialNetworkList = styled.ul`
  display: flex;
  justify-content: start;
  column-gap: 12px;
`
const SocialNetworkItem = styled.li`
  transition: 0.4s ease-in-out;
  transform: translateY(0);
&:hover{
  transition: 0.4s ease-in-out;
  transform: translateY(-10px);
}
`
const SocialLink = styled.a`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  border: 1px solid ${theme.colors.border.light};
  justify-content: center;
  align-items: center;
`
const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 40px;
`
const Title = styled.h3`
  color: ${theme.colors.text.light};
`
const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 20px;
  
`
const ContactItem = styled.li`
  display: flex;
  column-gap: 8px;
  position: relative;

  &:hover {
    &::before{
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      bottom: 0;
      background-color: ${theme.colors.background.body};
    }
  }

`
export const S = {
    ContactItem,
    ContactList,
    Title,
    ContactWrap,
    SocialLink,
    SocialNetworkItem,
    SocialNetworkList,
    SocialNetWorkWrap,
    Footer
}