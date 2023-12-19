import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.ts";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexContainer} from "../../../components/FlexContainer.ts";

export const FavoriteCoffee: React.FC = () => {
    return (
        <StyledFavoriteCoffee>
            <SectionTitle align={"center"}>Choose your <span>favorite</span> coffee</SectionTitle>
           <FlexContainer justify={"center"}>
               <Slider/>
           </FlexContainer>

        </StyledFavoriteCoffee>
    );
};


const StyledFavoriteCoffee = styled.section`

`
