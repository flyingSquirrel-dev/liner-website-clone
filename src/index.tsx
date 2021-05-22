import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';
import { GlobalStyle } from './styled/GlobalStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/myhighlights">
          <div>myhighlights</div>
        </Route>
        <Route path="/home">
          <div>HOME</div>
        </Route>
        <Route path="/">
          <div>asdfadsf</div>
        </Route>
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
