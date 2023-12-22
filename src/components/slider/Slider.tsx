import React from 'react';
import styled from "styled-components";
import {Text} from "../text/Text.ts";
import {Photo} from "../photo/Photo.ts";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../styles/slider.css";
import coffee1 from "../../assets/sliderImg/coffee-slider-1.png"
import coffee2 from "../../assets/sliderImg/coffee-slider-2.png"
import coffee3 from "../../assets/sliderImg/coffee-slider-3.png"
import {theme} from "../../styles/Theme.ts";
import {Icon} from "../icon/Icon.tsx";


type SlidPropsType = {
    src: string
    text: string
    price: string
    title: string
}

const Slid = (props: SlidPropsType) => {
    return(
        <StyledSlid>
            <Photo src={props.src} alt={"coffee"} width={"480px"} height={"480px"}/>
            <TitleSlid>{props.title}</TitleSlid>
            <Text color={theme.colors.text.dark}>{props.text}</Text>
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
                renderPrevButton={() =>{
                    return (
                       <Icon iconId={"arrow-left"}
                       width={"24px"}
                       height={"24px"}
                       viewBox={"0 0 24 24"}/>
                    )
                }}
                renderNextButton={() => {
                    return(
                        <Icon iconId={"arrow-right"}
                              width={"24px"}
                              height={"24px"}
                              viewBox={"0 0 24 24"}/>
                    )
                }}
            />
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  width: 100%;
  
`
const StyledSlid = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  ${Text} {
    max-width: 480px;
    width: 100%;
    margin: 16px 0;
  }
  @media ${theme.media.mobile} {
    ${Photo} {
width: 348px;
      height: 348px;
    }  
  }
  
`
const TitleSlid = styled.h3`
  
margin-top: 20px;
`
const Price = styled.h3`
margin-bottom:24px;
`