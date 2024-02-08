import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Photo} from "../photo/Photo.ts";

const BgcWrap = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 1s ease-in-out;
  background-color: rgba(64, 63, 61, 0);
  z-index: -1;
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transition: 1s ease-in-out;
    background-color: rgba(64, 63, 61, 0.80);
    z-index: 900;
  `}

`

const ModalCard = styled.div<{ isOpen: boolean }>`
  position: fixed;
  max-width: 800px;
  width: 100%;
  //display: flex;
  //column-gap: 20px;
  padding: 16px;
  border-radius: 40px;
  background-color: ${theme.colors.background.body};
  top: -600px;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s ease-in-out;

  z-index: 1000;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    top: 50%;
    transition: 1s ease-in-out;
  `} @media ${theme.media.mobile} {
  ${Photo} {
    display: none;
  }
}
`
const Wrap = styled.div`
  display: flex;
  gap: 20px;
`

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 20px;

  Button {
    width: 100%;
  }
`
const TextWrap = styled.div`

`
const Title = styled.h3`

`

const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Total = styled.h3`

`
const Price = styled.h3`

`
const InfoWrap = styled.div`
  display: flex;
  column-gap: 8px;
  padding: 12px 0;
  width: 100%;
  border-top: 1px solid ${theme.colors.border.light};
`
const InfoIcon = styled.div`
  min-width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${theme.colors.border.dark};
  font-size: 10px;

`
const Information = styled.small`
  font-size: 10px;
  font-weight: 600;
  line-height: 140%
`
export const S = {
    Information,
    InfoIcon,
    InfoWrap,
    Price,
    Total,
    PriceWrap,
    Title,
    TextWrap,
    CardContentContainer,
    Wrap,
    ModalCard,
    BgcWrap
}