import styled from "styled-components";


type ButtonPropsType = {
    padding?: string
    background?: string
    color?: string
    width?: string

}
export const Button = styled.button<ButtonPropsType>`
  padding: ${props => props.padding || "20px 20px"};
  background-color: ${props => props.background || "#fff"};
  border-radius: 100px;
  text-align: center;
  width: ${props => props.width || "200px"};
  color: ${props => props.color || "#403F3D"};
`