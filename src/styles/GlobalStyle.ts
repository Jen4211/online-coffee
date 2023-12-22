import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    margin: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.background.body};
    
  }

  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
  }

  ul {
    list-style: none;
  }
  section {
    margin-bottom: 100px;
  }
  
  p {
    font-size: 16px;
    
  }
  button {
    cursor: pointer;
    border: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    
    &:hover{
      background-color:${theme.colors.background.container};
      color: ${theme.colors.text.light};
    }
  }
  
  h2 {
    font-size: 60px;
    font-weight: 600;
    line-height: 125%;
  }
  h3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 125%;
  }
`