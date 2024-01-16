import styled from "styled-components";
import {Photo} from "../../../components/photo/Photo.ts";

const About = styled.section`

`
const Gallery = styled.div`
  display: flex;
  column-gap: 40px;
  
`
const BoxPhoto = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
  
  ${Photo} {
    transition: linear 0.4s;
    &:hover{
     
      transform: scale(1.1);
    }
  }
`
const PhotoContainer = styled.div`
overflow: hidden;
  border-radius: 20px;
`

export const S = {
    PhotoContainer,
    BoxPhoto,
    Gallery,
    About
}