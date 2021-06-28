import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Neue-Machina';
    src: url('/fonts/NeueMachina-Regular.woff2') format('woff2'),
         url('/fonts/NeueMachina-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    min-width: 320px;
    font-family: Neue-Machina;
    overflow-x: hidden;
  }

  a{
    text-decoration: none;
    color: #000;
  } 

`;
