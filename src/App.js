import React, { Component } from 'react';
import { Button, Input } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Input/>
        <Button primary>Hello</Button>
      </div>
    );
  }
}

export default App;
