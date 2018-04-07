import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.input`
  background: #fff;
  color: #333;
  border: 1px solid #999;
`

export class Input extends React.Component {
  state = {
    value: ``,
  }

  onUserInput = ({ value }) => {
    const { onChange } = this.props;
    this.onValueReceive({ value });
    onChange && onChange({ value });
  }

  onValueReceive = ({ value }) => {
    value !== this.state.value && this.setState({ value });
  }

  componentDidMount(){
    const { value } = this.props;
    value && this.onValueReceive({ value });
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    value !== this.props.value && this.onValueReceive({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <Wrapper {...this.state} onChange={this.onUserInput} />
    )
  }
}