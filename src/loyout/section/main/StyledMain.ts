import styled from "styled-components";
import bgrImg from "../../../assets/backgroundImg/img-hero.webp";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/button/Button.ts";

const Main = styled.section`
  margin-top: 20px;
  max-width: 1360px;
  width: 100%;
  background-image: url(${bgrImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 40px;
  padding: 100px;
  
  @media ${theme.media.tablet} {
    padding: 100px 60px;
  }
  @media ${theme.media.mobile} {
    padding: 60px 16px;
  }
`
const ContentWrap = styled.div`
  max-width: 530px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 40px;
  ${Button}{
    width: 200px;
    border: none;
  }
`
const MainTitle = styled.h1`
  font-family: "Inter", sans-serif;
  color: ${theme.colors.text.light};
  font-size: 72px;
  font-weight: 600;
  line-height: 105%;
  

  span {
    color: ${theme.colors.text.accent};
    font-style: italic;
  }
  
  @media ${theme.media.mobile} {
    font-size: 42px;
    line-height: 115%
  }
`
export const S = {
    MainTitle,
    ContentWrap,
    Main
}