import React from 'react';
import { Photo } from '../photo/Photo.ts';
import { DataMenuItemType } from '../../loyout/section/drinkMenu/DrinkMenu.tsx';
import { Text } from '../text/Text.ts';
import { Button } from '../button/Button.ts';
import { ButtonsArray } from '../buttonsArray/ButtonsArray.tsx';
import { S } from './StyledModalCard.ts';

type ModalCardPropsType = {
  menu: Array<DataMenuItemType>;
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
};

export type AdditivesForPortionType = {
  title: string;
  additive: string;
};

const dataOptionsButtonsForCoffee: Array<Array<AdditivesForPortionType>> = [
  [
    { title: 'S', additive: '200 ml' },
    { title: 'M', additive: '300 ml' },
    { title: 'L', additive: '400 ml' },
  ],
  [
    { title: '1', additive: 'Sugar' },
    { title: '2', additive: 'Cinnamon' },
    { title: '3', additive: 'Syrup' },
  ],
];
const dataOptionsButtonsForTea: Array<Array<AdditivesForPortionType>> = [
  [
    { title: 'S', additive: '200 ml' },
    { title: 'M', additive: '300 ml' },
    { title: 'L', additive: '400 ml' },
  ],
  [
    { title: '1', additive: 'Sugar' },
    { title: '2', additive: 'Lemon' },
    { title: '3', additive: 'Syrup' },
  ],
];
const dataOptionsButtonsForDessert: Array<Array<AdditivesForPortionType>> = [
  [
    { title: 'S', additive: '50 g' },
    { title: 'M', additive: '100 g' },
    { title: 'L', additive: '200 g' },
  ],
  [
    { title: '1', additive: 'Berries' },
    { title: '2', additive: 'Nuts' },
    { title: '3', additive: 'Jem' },
  ],
];

export const ModalCard: React.FC<ModalCardPropsType> = (props: ModalCardPropsType) => {
  return (
    <S.BgcWrap isOpen={props.isOpen}>
      <S.ModalCard isOpen={props.isOpen}>
        {props.menu.map((m) => {
          return (
            <S.Wrap key={m.id}>
              <Photo src={m.src} height={'310px'} width={'310px'} key={m.id} alt={m.type} radius={'40px'} />
              <S.CardContentContainer>
                <S.TextWrap>
                  <S.Title>{m.title}</S.Title>
                  <Text>{m.description}</Text>
                </S.TextWrap>

                <ButtonsArray
                  arrayButtons={
                    m.type === 'dessert'
                      ? dataOptionsButtonsForDessert[0]
                      : m.type === 'coffee'
                        ? dataOptionsButtonsForCoffee[0]
                        : m.type === 'tea'
                          ? dataOptionsButtonsForTea[0]
                          : []
                  }
                  title={'Size'}
                />

                <ButtonsArray
                  arrayButtons={
                    m.type === 'dessert'
                      ? dataOptionsButtonsForDessert[1]
                      : m.type === 'coffee'
                        ? dataOptionsButtonsForCoffee[1]
                        : m.type === 'tea'
                          ? dataOptionsButtonsForTea[1]
                          : []
                  }
                  title={'Additives'}
                />
                <S.PriceWrap>
                  <S.Total>Total:</S.Total>
                  <S.Price>{m.price}</S.Price>
                </S.PriceWrap>
                <S.InfoWrap>
                  <S.InfoIcon>i</S.InfoIcon>
                  <S.Information>
                    The cost is not final. Download our mobile app to see the final price and place your order. Earn
                    loyalty points and enjoy your favorite coffee with up to 20% discount.
                  </S.Information>
                </S.InfoWrap>
                <Button padding={'10px 78px'} onClick={() => props.onToggle(false)}>
                  Close
                </Button>
              </S.CardContentContainer>
            </S.Wrap>
          );
        })}
      </S.ModalCard>
    </S.BgcWrap>
  );
};
