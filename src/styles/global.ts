import { createGlobalStyle } from "styled-components"
import "./fonts.css"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    color: #333;
    background-color: #F5F5F5;
    
    font-family: Montserrat, sans-serif;
    font-size: 14px;

    height: 100%;
  }
`;