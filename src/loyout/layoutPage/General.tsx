import React, { ReactNode } from 'react';
import { Header } from '../header/Header.tsx';
import { Footer } from '../footer/Footer.tsx';

type GeneralPropsType = {
  children: ReactNode;
};
export const General: React.FC<GeneralPropsType> = (props: GeneralPropsType) => {
  return (
    <>
      <Header />
      <>{props.children}</>
      <Footer />
    </>
  );
};
