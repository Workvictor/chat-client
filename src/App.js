import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import { store }            from './store';
import {
  Button,
  Input,
  Main
}                           from './components';


class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Main>
          <Input/>
          <Button primary>Hello</Button>
        </Main>
      </Provider>
    );
  }
}

export default App;
