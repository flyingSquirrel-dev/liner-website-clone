import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';
import { GlobalStyle } from './styled/GlobalStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { NotFoundPage } from './pages/notfound';
import { MyHighlights } from './pages/myhighlights';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/myhighlights" render={MyHighlights} />
        <Route path="/home" render={Home} />
        <Route path="/" exact={true} render={Home} />
        <Route path="*" render={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
