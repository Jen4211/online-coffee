import styled from "styled-components";

type PhotoPropsType = {
    width?: string
    height?: string
    radius?: string
}

export const Photo = styled.img<PhotoPropsType>`
  max-width: ${props => props.width || "auto"};
  max-height: ${props => props.height || "auto"};
  border-radius: ${props => props.radius || "none"};
  object-fit: cover;
  width: 100%;
`