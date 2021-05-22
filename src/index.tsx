import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import theme from './styled/theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "Montserrat", sans-serif;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>Hello World</div>
  </ThemeProvider>,
  document.getElementById('root'),
);
