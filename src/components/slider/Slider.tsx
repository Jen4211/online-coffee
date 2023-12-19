import React from 'react';
import styled from "styled-components";
import {Text} from "../text/Text.ts";
import {Photo} from "../photo/Photo.ts";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import coffee1 from "../../assets/sliderImg/coffee-slider-1.png"
import coffee2 from "../../assets/sliderImg/coffee-slider-2.png"
import coffee3 from "../../assets/sliderImg/coffee-slider-3.png"


type SlidPropsType = {
    src: string
    text: string
    price: string
    title: string
}

const Slid = (props: SlidPropsType) => {
    return(
        <StyledSlid>
            <Photo src={props.src} alt={"coffee"}/>
            <TitleSlid>{props.title}</TitleSlid>
            <Text>{props.text}</Text>
            <Price>{props.price}</Price>
        </StyledSlid>
    )
}


const items = [
    <Slid src={coffee1} text={"This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk."} price={"$5.50"} title={"S’mores Frappuccino"}/>,
    <Slid src={coffee2} text={"Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam."} price={"$5.00"} title={"Caramel Macchiato"}/>,
    <Slid src={coffee3} text={"A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice."} price={"$4.50"} title={"Ice coffee"}/>,
]

export const Slider: React.FC = () => {
    return (
        <StyledSlider>
            <AliceCarousel
                mouseTracking
                items={items}
            />
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
max-width: 480px;
  width: 100%;
`
const StyledSlid = styled.div`
text-align: center;
`
const TitleSlid = styled.h3`

`
const Price = styled.h3`

`