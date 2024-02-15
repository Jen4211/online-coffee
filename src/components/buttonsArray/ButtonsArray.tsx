import React from 'react';
import { Text } from '../text/Text.ts';
import { Button } from '../button/Button.ts';
import { AdditivesForPortionType } from '../modalCard/ModalCard.tsx';
import { IconWrap } from '../../loyout/section/drinkMenu/StyledDrinkMenu.ts';
import { S } from './StyledButtonsArray.ts';

type ButtonsArrayPropsType = {
  title: string;
  arrayButtons: Array<AdditivesForPortionType>;
};
export const ButtonsArray: React.FC<ButtonsArrayPropsType> = (props: ButtonsArrayPropsType) => {
  return (
    <S.OptionContainer>
      <Text>{props.title}</Text>
      <S.ButtonContainer>
        {props.arrayButtons.map((a, index) => {
          return (
            <Button padding={'8px 16px 8px 8px'} key={index}>
              <IconWrap>{a.title}</IconWrap>
              {a.additive}
            </Button>
          );
        })}
      </S.ButtonContainer>
    </S.OptionContainer>
  );
};
