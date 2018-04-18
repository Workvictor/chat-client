import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import styled               from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter
}                           from 'react-router-dom';
import { store }            from './store';
import {
  Flex,
  Wrapper,
  MainLayout,
  SideBarLayout,
  ContentLayout,
  Home,
  Body,
  SideBar,
}                           from './components';
import { routes }           from './const';


const MainWrapper=styled(MainLayout)`
  background-color: #a0a0a0;
`;

export class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainWrapper>
            <Wrapper>
              <Switch>
                <Route exact path={routes.root} component={Home}/>
                {/*<Route path={`/login`} component={Login}/>*/}
                {/*<Route path="/:user" component={User}/>*/}
                {/*<Route component={NoMatch}/>*/}
              </Switch>
              <Flex>
                <SideBarLayout>
                  <SideBar/>
                </SideBarLayout>
                <ContentLayout>
                  <Body/>
                </ContentLayout>
              </Flex>
            </Wrapper>
          </MainWrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}
