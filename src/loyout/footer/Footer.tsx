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
}

const socialItems: Array<string> = [
    "twitter", "instagram", "facebook"
]
const contactItems: Array<ContactType> = [
    {id: "pin-alt", text: "8558 Green Rd.,  LA"},
    {id: "phone", text: "+1 (603) 555-0123"},
    {id: "clock", text: "Mon-Sat: 9:00 AM – 23:00 PM"},
]
export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <FlexContainer>
                <SocialNetWorkWrap>
                    <SectionTitle color={theme.colors.text.light}>Sip, Savor,
                        Smile. <span>It’s coffee time!</span></SectionTitle>
                    <SocialNetworkList>
                        {socialItems.map((i, index) => {
                            return (
                                <SocialNetworkItem key={index}>
                                    <SocialLink>
                                        <Icon iconId={i}
                                              width={"24px"}
                                              height={"24px"}
                                              viewBox={"0 0 24 24"}/>
                                    </SocialLink>
                                </SocialNetworkItem>
                            )
                        })}
                    </SocialNetworkList>
                </SocialNetWorkWrap>
                <ContactWrap>
                    <Title>Contact us</Title>
                    <ContactList>
                        {contactItems.map((i, index) => {
                            return (
                                <ContactItem key={index}>
                                    <Icon iconId={i.id}
                                          width={"20px"}
                                          height={"20px"}
                                          viewBox={"0 0 20 20"}/>
                                    <Text weight={"600"} color={theme.colors.text.light}>{i.text}</Text>

                                </ContactItem>
                            )
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

  ${FlexContainer} {
    column-gap: 100px;
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
  justify-content: space-around;
  align-items: start;
  //row-gap: 40px;
  width: 100%;
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
  
`