import React from 'react';
import { path } from '../../loyout/pages/Pages.tsx';
import { Icon } from '../icon/Icon.tsx';
import { NavLink } from 'react-router-dom';

type LogoPropsType = {
  onToggle?: () => void;
};
export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
  return (
    <NavLink to={path.MAIN} onClick={props.onToggle}>
      <Icon iconId={'logo'} width={'100px'} height={'60px'} viewBox={'0 0 100 60'} />
    </NavLink>
  );
};
