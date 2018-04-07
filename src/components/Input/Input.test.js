import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from './Input';


describe(`Компонент Input`, () => {
  test(`должен соответствовать снимку`, () => {
    const snapshot = mount(<Input value={`test`} />);
    expect(snapshot).toMatchSnapshot();
  })

  it(`должен рендерится без ошибок`, () => {
    shallow(<Input />);
  })

  it(`должен изменять значение при изменении состояния`, () => {
    const input = mount(<Input />);
    input.setState({ value: `test` });
    expect(input.state(`value`)).toBe(`test`);
  })

  it(`должен изменять состояние при монтировании, если задано начальное знчение`, () => {
    const newValue = `newValue`;
    const input = shallow(<Input value={newValue} />);
    expect(input.state(`value`)).toBe(newValue);
  })

  it(`должен изменять значение при получении нового значения, если оно отличается от текущего`, () => {
    const newValue = `newValue`;
    const input = shallow(<Input />);
    input.setProps({ value: newValue });
    expect(input.state(`value`)).toBe(newValue);
  })

  it(`должен изменять значение состояние при пользовательском вводе`, ()=>{
    const userInput = `newValue`;
    const input = mount(<Input />);
    input.simulate(`change`, {value: userInput});
    expect(input.state(`value`)).toBe(userInput);
  })

})
