import React from 'react';
import {Button} from "../../../../components/button/Button.ts";
import {StatusTabMenuType, TabMenuItemType} from "../DrinkMenu.tsx";
import {IconWrap, S} from "../StyledDrinkMenu.ts";

type TabMenuPropsType = {
    tabMenu: Array<TabMenuItemType>
    changeFilterStatus: (value: StatusTabMenuType) => void
    currentFilterStatus: StatusTabMenuType
}
export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.ButtonContainer>
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

        </S.ButtonContainer>
    );
};
