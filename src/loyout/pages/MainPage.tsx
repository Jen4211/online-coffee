import React from 'react';
import { FavoriteCoffee } from '../section/favoriteCoffee/FavoriteCoffee.tsx';
import { About } from '../section/about/About.tsx';
import { MobileApp } from '../section/mobileApp/MobileApp.tsx';
import { Main } from '../section/main/Main.tsx';

export const MainPage: React.FC = () => {
  return (
    <>
      <Main />
      <FavoriteCoffee />
      <About />
      <MobileApp />
    </>
  );
};
