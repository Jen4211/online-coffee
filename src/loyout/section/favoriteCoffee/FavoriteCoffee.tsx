import React from 'react';
import {S} from "./StyledFavoriteCoffee.ts";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.ts";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexContainer} from "../../../components/FlexContainer.ts";

export const FavoriteCoffee: React.FC = () => {
    return (
        <S.FavoriteCoffee>
            <SectionTitle align={"center"} id="coffee">Choose your <span>favorite</span> coffee</SectionTitle>
           <FlexContainer justify={"center"}>
               <Slider/>
           </FlexContainer>

        </S.FavoriteCoffee>
    );
};


