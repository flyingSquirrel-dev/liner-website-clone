import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styled/theme';
import { GlobalStyle } from './styled/GlobalStyle';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './pages/home';
import { NotFoundPage } from './pages/notfound';
import { MyHighlights } from './pages/myhighlights';
import { Header } from './containers/Header';
import { LeftMenu } from './containers/LeftMenu';
import { More } from './pages/more';
import { Detail } from './pages/detail';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 104px;
`;

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootContainer>
        <Header />
        <ContentWrapper>
          <LeftMenu />
          <Switch>
            <Route path="/detail/:articleID" component={Detail} />
            <Route path="/myhighlights/highlights" component={MyHighlights} />
            <Route path="/myhighlights/tags" component={MyHighlights} />
            <Route path="/myhighlights">
              <Redirect to="/myhighlights/highlights" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/more" component={More} />
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </ContentWrapper>
      </RootContainer>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
