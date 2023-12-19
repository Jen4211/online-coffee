import styled from "styled-components";

type FlexContainerPropsType = {
    justify?: string
    direction?: string
    align?: string
    wrap?: string
}
export const FlexContainer = styled.div<FlexContainerPropsType>`

  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  height: 100%;
`