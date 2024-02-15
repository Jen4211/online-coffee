import React from 'react';
import { path } from '../../loyout/pages/Pages.tsx';
import { Icon } from '../icon/Icon.tsx';
import { S } from './StyledLinkMenuDrinks.ts';

export const HeaderLinkDrinkMenu: React.FC = () => {
  return (
    <S.HeaderLinkDrinkMenu to={path.MENU}>
      <S.WrapLinkDrinkMenu>
        Menu
        <Icon iconId={'coffee-cup'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'} />
      </S.WrapLinkDrinkMenu>
    </S.HeaderLinkDrinkMenu>
  );
};
