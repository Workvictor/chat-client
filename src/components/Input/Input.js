import React  from 'react';
import styled from 'styled-components';


const Wrapper=styled.textarea`
  background: #fff;
  color: #333;
  border: 1px solid #999;
  resize: none;
`;

export class Input extends React.Component{
  state={
    value: ``
  };

  onUserInput=({ value })=>{
    const { onChange }=this.props;
    this.onValueReceive({ value });
    onChange && onChange({ value });
  };

  onValueReceive=({ value })=>{
    value !== this.state.value && this.setState({ value });
  };

  componentDidMount(){
    const { value }=this.props;
    value && this.onValueReceive({ value });
  }

  componentWillReceiveProps({ value }){
    value !== this.props.value && this.onValueReceive({ value });
  }

  render(){
    const { className }=this.props;
    const { value }=this.state;
    return (
      <Wrapper
        className={className}
        value={value}
        onChange={this.onUserInput}
        rows={3}
      />
    );
  }
}