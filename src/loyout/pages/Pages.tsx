import React from 'react';
import { Route, Routes} from "react-router-dom";
import {MainPage} from "./MainPage.tsx";
import {DrinkMenu} from "../section/drinkMenu/DrinkMenu.tsx";


export const path = {
    MAIN: '/main',
    MENU: '/menu'
}

export const Pages: React.FC = () => {
    return (

        <Routes>
            <Route path="*" element={<MainPage /> } />
            <Route path={path.MENU} element={<DrinkMenu />}/>
        </Routes>
    );
};

