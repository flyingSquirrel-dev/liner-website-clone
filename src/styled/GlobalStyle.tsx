import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
    color: #000;
  }
  input {
    border: none;
    appearance: none;
    outline: none;
  }
  button {
    border: none;
    background-color: unset;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: unset;
  }
  h1, h2, div {
    cursor: text;
  }
`;
