import React from 'react';
import {S} from "./StyledFooter.ts";
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
        <S.Footer>
            <FlexContainer wrap={"wrap"}>
                <S.SocialNetWorkWrap>
                    <SectionTitle id={"contact"} color={theme.colors.text.light}>Sip, Savor,
                        Smile. <span>It’s coffee time!</span></SectionTitle>
                    <S.SocialNetworkList>
                        {socialItems.map((i, index) => {
                            return (
                                <S.SocialNetworkItem key={index}>
                                    <S.SocialLink href={i.href} target={"_blank"}>
                                        <Icon iconId={i.id}
                                              width={"24"}
                                              height={"24"}
                                              viewBox={"0 0 24 24"}/>
                                    </S.SocialLink>
                                </S.SocialNetworkItem>
                            )
                        })}
                    </S.SocialNetworkList>
                </S.SocialNetWorkWrap>
                <S.ContactWrap>
                    <S.Title id="contact">Contact us
                    <a href=""></a></S.Title>
                    <S.ContactList>
                        {contactItems.map((i, index) => {
                            if(i.id !== "clock"){
                                return (
                                    <S.ContactItem as={"a"} key={index} href={i.href} target="_blank">
                                        <Icon iconId={i.id}
                                              width={"20"}
                                              height={"20"}
                                              viewBox={"0 0 20 20"}/>
                                        <Text weight={"600"} color={theme.colors.text.light}>{i.text}</Text>
                                    </S.ContactItem>
                                )
                            }
                            else {
                                return (
                                    <S.ContactItem  key={index}>
                                        <Icon iconId={i.id}
                                              width={"20"}
                                              height={"20"}
                                              viewBox={"0 0 20 20"}/>
                                        <Text weight={"600"} color={theme.colors.text.light}>{i.text}</Text>
                                    </S.ContactItem>
                                )
                            }
                        })}
                    </S.ContactList>
                </S.ContactWrap>
            </FlexContainer>
        </S.Footer>
    );
};



