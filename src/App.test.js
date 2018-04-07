import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe(`Компонент App`, ()=>{
  it('должен рендериться без ошибок', () => {
    shallow(<App />);
  });
})
