import styled from "styled-components";

type TextPropsType = {
    color?: string
    weight?: string
}
export const Text = styled.p<TextPropsType>`
  color: ${props => props.color || "#403F3D"};
  font-weight: ${props => props.weight || "400"};
  line-height: 150%;
`