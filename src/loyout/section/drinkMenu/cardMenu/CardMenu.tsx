import React from 'react';
import styled from "styled-components";
import {Photo} from "../../../../components/photo/Photo.ts";
import {theme} from "../../../../styles/Theme.ts";
import {Text} from "../../../../components/text/Text.ts";
import {DataMenuItemType} from "../DrinkMenu.tsx";


type CardMenuPropsType = {
    menu: Array<DataMenuItemType>
}
export const CardMenu: React.FC<CardMenuPropsType> = (props: CardMenuPropsType) => {
    return (
        <>
            {props.menu.map((m) => {
                return (
                    <CardContainer key={m.id}>
                        <Photo src={m.src}
                               height={"310px"}
                               width={"310px"}
                               key={m.id}
                               alt={m.type}
                               radius={"40px"}/>
                        <ContentContainer>
                            <TextWrap>
                                <Title>{m.title}</Title>
                                <Text>{m.description}</Text>
                            </TextWrap>
                            <Price>{m.price}</Price>
                        </ContentContainer>
                    </CardContainer>
                )
            })}

        </>

    );
};

const CardContainer = styled.div`
  max-width: 310px;
  width: 100%;
  border-radius: 40px;
  border: 1px solid ${theme.colors.border.light};
`
const ContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 12px;

`
const TextWrap = styled.div`
    
`

const Title = styled.h3`
  margin-bottom: 12px;
`
const Price = styled.h3`

`