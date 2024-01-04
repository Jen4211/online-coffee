import React from 'react';
import {Text} from "../text/Text.ts";
import {Button} from "../button/Button.ts";
import {IconWrap} from "../../loyout/section/drinkMenu/tabMenu/TabMenu.tsx";
import styled from "styled-components";
import {AdditivesForPortionType} from "../modalCard/ModalCard.tsx";
import {theme} from "../../styles/Theme.ts";


type ButtonsArrayPropsType = {
    title: string
    arrayButtons: Array<AdditivesForPortionType>
}
export const ButtonsArray: React.FC<ButtonsArrayPropsType> = (props: ButtonsArrayPropsType) => {
    return (
        <OptionContainer>
            <Text>{props.title}</Text>
            <ButtonContainer>
                {props.arrayButtons.map((a, index) => {
                    return (

                        <Button padding={"8px 16px 8px 8px"} key={index}>
                            <IconWrap>
                                {a.title}
                            </IconWrap>
                            {a.additive}
                        </Button>

                    )
                })}
            </ButtonContainer>
        </OptionContainer>
    );
};

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 8px;
  

  ${Button} {
    width: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    column-gap: 8px;
    border-color: ${theme.colors.border.light};

  ${IconWrap} {
  color: ${theme.colors.text.dark}
  }
    &:hover {
      ${IconWrap} {
        background-color: ${theme.colors.background.body};
      }
    }
`