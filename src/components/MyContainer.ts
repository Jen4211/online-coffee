import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const MyContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 20px 40px 40px;
  min-height: 100%;
  margin: 0 auto;

  @media ${theme.media.mobile} {
    padding: 20px 16px 40px;
  }
`
