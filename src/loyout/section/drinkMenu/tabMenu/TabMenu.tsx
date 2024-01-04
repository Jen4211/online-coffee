import React from 'react';
import {Button} from "../../../../components/button/Button.ts";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {StatusTabMenuType, TabMenuItemType} from "../DrinkMenu.tsx";

type TabMenuPropsType = {
    tabMenu: Array<TabMenuItemType>
    changeFilterStatus: (value: StatusTabMenuType) => void
    currentFilterStatus: StatusTabMenuType
}
export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <ButtonContainer>
            {props.tabMenu.map((m, index) => {
                return (
                    <Button padding={"8px 16px 8px 8px"}
                            key={index}
                            onClick={() => props.changeFilterStatus(m.status)}
                            active={props.currentFilterStatus === m.status}>
                        <IconWrap>
                            {m.icon}
                        </IconWrap>
                        {m.text}
                    </Button>
                )
            })}

        </ButtonContainer>
    );
};

export const IconWrap = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-color: ${theme.colors.border.light};
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
  margin-bottom: 40px;

  ${Button} {
    display: flex;
    align-items: center;
    column-gap: 8px;
    border-color: ${theme.colors.border.light};

    &:hover {
      ${IconWrap} {
        background-color: ${theme.colors.background.body};
      }
    }
  }
`