import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import { store }            from './store';
import {
  Button,
  Input,
  MainLayout,
  Wrapper,
  Body
}                           from './components';


class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <MainLayout>
          <Wrapper>
            <Body/>
            <Input/>
            <Button primary>send</Button>
          </Wrapper>
        </MainLayout>
      </Provider>
    );
  }
}

export default App;
