import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import styled               from 'styled-components';
import { store }            from './store';
import {
  MainLayout,
  Wrapper,
  Flex,
  SideBarLayout,
  ContentLayout,
  Body,
  SideBar
}                           from './components';


const MainWrapper=styled(MainLayout)`
  background-color: #a0a0a0;
`;

export class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <MainWrapper>
          <Wrapper>
              {/*<Switch>*/}
                {/*<Route exact path={`/`} component={Home}/>*/}
                {/*<Route path={`/login`} component={Login}/>*/}
                {/*<Route path="/:user" component={User}/>*/}
                {/*<Route component={NoMatch}/>*/}
              {/*</Switch>*/}
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
      </Provider>
    );
  }
}
