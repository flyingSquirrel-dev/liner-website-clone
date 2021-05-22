import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "Montserrat", sans-serif;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <div>Hello World</div>
  </>,
  document.getElementById('root'),
);
