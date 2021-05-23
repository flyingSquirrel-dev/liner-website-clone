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
    box-sizing: content-box;
    background-color: unset;
  }
  a {
    text-decoration: none;
  }
`;
