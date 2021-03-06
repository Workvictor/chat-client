import React from 'react';
import { shallow } from 'enzyme';
import { Button, presetList } from './Button';
import renderer from 'react-test-renderer';


describe(`Компонент Button`, () => {
  test('должен рендериться без ошибок', function () {
    shallow(<Button>test</Button>);
  });

  test('соответствовать снимку', () => {
    const tree = shallow(<Button>test</Button>);
    expect(tree).toMatchSnapshot();
  });

  presetList.forEach(presetName=>{
    test(`должен поддерживать пресет ${presetName}` , () => {
      const preset = shallow(<Button {...{[presetName]:true}}>test</Button>);
      expect(preset.is(`.${presetName}`)).toBe(true);
    });
  })

  test(`должен передавать className` , () => {
    const test = shallow(<Button className={`test`}>test</Button>);
    expect(test.is(`.test`)).toBe(true);
  });

});