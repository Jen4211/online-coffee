import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {FlexContainer} from "../../components/FlexContainer.ts";
import {SectionTitle} from "../../components/sectionTitle/SectionTitle.ts";
import {Icon} from "../../components/icon/Icon.tsx";
import {Text} from "../../components/text/Text.ts";

type ContactType = {
    id: string
    text: string
    href?: string
}
type SocialItemsType = {
    id: string
    href: string
}

const socialItems: Array<SocialItemsType> = [
    {id:"twitter", href:"https://twitter.com/"},
    {id:"instagram", href:"https://www.instagram.com/"},
    {id:"facebook", href:"https://www.facebook.com/"},

]
const contactItems: Array<ContactType> = [
    {id: "pin-alt", text: "8558 Green Rd.,  LA", href: "#"},
    {id: "phone", text: "+1 (603) 555-0123", href: "tel:+1 (603) 555-0123"},
    {id: "clock", text: "Mon-Sat: 9:00 AM – 23:00 PM"},
]
export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <FlexContainer wrap={"wrap"}>
                <SocialNetWorkWrap>
                    <SectionTitle id={"contact"} color={theme.colors.text.light}>Sip, Savor,
                        Smile. <span>It’s coffee time!</span></SectionTitle>
                    <SocialNetworkList>
                        {socialItems.map((i, index) => {
                            return (
                                <SocialNetworkItem key={index}>
                                    <SocialLink href={i.href} target={"_blank"}>
                                        <Icon iconId={i.id}
                                              width={"24"}
                                              height={"24"}
                                              viewBox={"0 0 24 24"}/>
                                    </SocialLink>
                                </SocialNetworkItem>
                            )
                        })}
                    </SocialNetworkList>
                </SocialNetWorkWrap>
                <ContactWrap>
                    <Title id="contact">Contact us
                    <a href=""></a></Title>
                    <ContactList>
                        {contactItems.map((i, index) => {
                            if(i.id !== "clock"){
                                return (
                                    <ContactItem as={"a"} key={index} href={i.href} target="_blank">
                                        <Icon iconId={i.id}
                                              width={"20"}
                                              height={"20"}
                                              viewBox={"0 0 20 20"}/>
                                        <Text weight={"600"} color={theme.colors.text.light}>{i.text}</Text>

                                    </ContactItem>
                                )
                            }
                            else {
                                return (
                                    <ContactItem  key={index}>
                                        <Icon iconId={i.id}
                                              width={"20"}
                                              height={"20"}
                                              viewBox={"0 0 20 20"}/>
                                        <Text weight={"600"} color={theme.colors.text.light}>{i.text}</Text>

                                    </ContactItem>
                                )
                            }
                        })}
                    </ContactList>
                </ContactWrap>
            </FlexContainer>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
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