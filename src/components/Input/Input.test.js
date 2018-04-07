import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from './Input';


describe(`Компонент Input`, () => {
  test(`должен соответствовать снимку`, () => {
    const snapshot = shallow(<Input value={`test`} />);
    expect(snapshot).toMatchSnapshot();
  })

  test(`должен рендерится без ошибок`, () => {
    shallow(<Input />);
  })

  test(`должен изменять значение при изменении состояния`, () => {
    const input = shallow(<Input />);
    input.setState({ value: `test` });
    expect(input.state(`value`)).toBe(`test`);
  })

  test(`должен изменять состояние при монтировании, если задано начальное знчение`, () => {
    const newValue = `newValue`;
    const input = shallow(<Input value={newValue} />);
    expect(input.state(`value`)).toBe(newValue);
  })

  test(`должен изменять значение при получении нового значения, если оно отличается от текущего`, () => {
    const newValue = `newValue`;
    const input = shallow(<Input />);
    input.setProps({ value: newValue });
    expect(input.state(`value`)).toBe(newValue);
  })

  test(`должен изменять значение состояние при пользовательском вводе`, () => {
    const userInput = `newValue`;
    const input = shallow(<Input />);
    input.simulate(`change`, { value: userInput });
    expect(input.state(`value`)).toBe(userInput);
  })

  test(`должен возвращать значение через callback onChange({value})`, () => {
    const hoc = {
      value: ``,
    }
    const userInput = `newValue`;
    const onChange = ({ value }) => hoc.value = value;
    const input = shallow(<Input onChange={onChange} />);
    input.simulate(`change`, { value: userInput });
    expect(hoc.value).toBe(userInput)
  })

})
