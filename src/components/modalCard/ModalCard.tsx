import React from 'react';
import styled, {css} from "styled-components";
import {Photo} from "../photo/Photo.ts";
import {DataMenuItemType} from "../../loyout/section/drinkMenu/DrinkMenu.tsx";
import {theme} from "../../styles/Theme.ts";
import {Text} from "../text/Text.ts";
import {Button} from "../button/Button.ts";
import {ButtonsArray} from "../buttonsArray/ButtonsArray.tsx";


type ModalCardPropsType = {
    menu: Array<DataMenuItemType>
    onToggle: (isOpen: boolean) => void
    isOpen: boolean
}

export type AdditivesForPortionType = {
    title: string
    additive: string
}


const dataOptionsButtonsForCoffee: Array<Array<AdditivesForPortionType>> = [
    [
        {title: "S", additive: "200 ml"},
        {title: "M", additive: "300 ml"},
        {title: "L", additive: "400 ml"},
    ],
    [
        {title: "1", additive: "Sugar"},
        {title: "2", additive: "Cinnamon"},
        {title: "3", additive: "Syrup"},
    ]
];
const dataOptionsButtonsForTea: Array<Array<AdditivesForPortionType>> = [
    [
        {title: "S", additive: "200 ml"},
        {title: "M", additive: "300 ml"},
        {title: "L", additive: "400 ml"},
    ],
    [
        {title: "1", additive: "Sugar"},
        {title: "2", additive: "Lemon"},
        {title: "3", additive: "Syrup"},
    ]
];
const dataOptionsButtonsForDessert: Array<Array<AdditivesForPortionType>> = [
    [
        {title: "S", additive: "50 g"},
        {title: "M", additive: "100 g"},
        {title: "L", additive: "200 g"},
    ],
    [
        {title: "1", additive: "Berries"},
        {title: "2", additive: "Nuts"},
        {title: "3", additive: "Jem"},
    ]
];


export const ModalCard: React.FC<ModalCardPropsType> = (props: ModalCardPropsType) => {


    return (
        <BgcWrap isOpen={props.isOpen}>
            <StyledModalCard isOpen={props.isOpen}>

                {props.menu.map((m) => {


                    return (
                        <Wrap key={m.id}>
                            <Photo src={m.src}
                                   height={"310px"}
                                   width={"310px"}
                                   key={m.id}
                                   alt={m.type}
                                   radius={"40px"}/>
                            <CardContentContainer>
                                <TextWrap>
                                    <Title>{m.title}</Title>
                                    <Text>{m.description}</Text>
                                </TextWrap>

                                <ButtonsArray arrayButtons={m.type === "dessert"
                                    ? dataOptionsButtonsForDessert[0]
                                    : m.type === "coffee"
                                        ? dataOptionsButtonsForCoffee[0]
                                        : m.type === "tea"
                                            ? dataOptionsButtonsForTea[0]
                                            : []} title={"Size"}/>


                                <ButtonsArray arrayButtons={m.type === "dessert"
                                    ? dataOptionsButtonsForDessert[1]
                                    : m.type === "coffee"
                                        ? dataOptionsButtonsForCoffee[1]
                                        : m.type === "tea"
                                            ? dataOptionsButtonsForTea[1]
                                            : []} title={"Additives"}/>
                                <PriceWrap>
                                    <Total>Total:</Total>
                                    <Price>{m.price}</Price>
                                </PriceWrap>
                                <InfoWrap>
                                    <InfoIcon>i</InfoIcon>
                                    <Information>The cost is not final. Download our mobile app to see the final price
                                        and
                                        place your order. Earn loyalty points and enjoy your favorite coffee with up to
                                        20%
                                        discount.</Information>
                                </InfoWrap>
                                <Button padding={"10px 78px"}
                                        onClick={() => props.onToggle(false)}>
                                    Close
                                </Button>
                            </CardContentContainer>
                        </Wrap>
                    )
                })}


            </StyledModalCard>
        </BgcWrap>
    );
};

const BgcWrap = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 1s ease-in-out;
  background-color: rgba(64, 63, 61, 0);
  z-index: -1;
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transition: 1s ease-in-out;
    background-color: rgba(64, 63, 61, 0.80);
    z-index: 900;
  `}

`

const StyledModalCard = styled.div<{ isOpen: boolean }>`
  position: fixed;
  max-width: 800px;
  width: 100%;
  //display: flex;
  //column-gap: 20px;
  padding: 16px;
  border-radius: 40px;
  background-color: ${theme.colors.background.body};
  top: -600px;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s ease-in-out;

  z-index: 1000;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    top: 50%;
    transition: 1s ease-in-out;
  `} 
  @media ${theme.media.mobile} {
  ${Photo} {
    display: none;
  }
}
`
const Wrap = styled.div`
  display: flex;
  gap: 20px;
`

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 20px;

  Button {
    width: 100%;
  }
`
const TextWrap = styled.div`

`
const Title = styled.h3`

`

const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Total = styled.h3`

`
const Price = styled.h3`

`
const InfoWrap = styled.div`
  display: flex;
  column-gap: 8px;
  padding: 12px 0;
  width: 100%;
  border-top: 1px solid ${theme.colors.border.light};
`
const InfoIcon = styled.div`
  min-width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${theme.colors.border.dark};
  font-size: 10px;

`
const Information = styled.small`
  font-size: 10px;
  font-weight: 600;
  line-height: 140%
`