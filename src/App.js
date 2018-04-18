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
  Chats,
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
                <Route exact path={routes.chats} component={Chats}/>
                {/*<Route path={`/login`} component={Login}/>*/}
                {/*<Route path="/:user" component={User}/>*/}
                {/*<Route component={NoMatch}/>*/}
              </Switch>
            </Wrapper>
          </MainWrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}
