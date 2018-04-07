import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.button`
  padding: 0.25rem 0.5rem;
  border: none;
  background: #fff;
  cursor: pointer;
  border-radius: 0.25rem;
  &.primary{
    background-color: Plum;
  }
  &.warning{
    background-color: Tomato;
    border: 1px solid OrangeRed
  }
`;

export const presetList = [
  `primary`,
  `warning`
];

const getPreset = props =>
  Object.keys(props)
    .filter(prop => presetList.includes(prop))
    .reduce((result, prop) =>`${result} ${prop}`, ``);

export const Button = props => {
  const { children } = props;
  const preset = getPreset(props);
  const className = (props.className || ``).concat(preset);
  return (
    <Wrapper
      {...{ className }}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
    >
      {children}
    </Wrapper>
  )
}