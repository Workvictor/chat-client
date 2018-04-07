// @flow
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.input`
  background: #fff;
  color: #333;
  border: 1px solid #999;
`

type Props = {
  value: string,
  onChange: ({value: string}) => void,
}

type State = {|
  value: string,
|}

export class Input extends React.Component<Props, State>{
  state = {
    value: ``
  };

  onUserInput = ({ value }:State) => {
    const { onChange } = this.props;
    this.onValueReceive({ value });
    onChange && onChange({ value });
  }

  onValueReceive = ({ value }:State) => {
    value !== this.state.value && this.setState({ value });
  }

  componentDidMount() {
    const { value } = this.props;
    value && this.onValueReceive({ value });
  }

  componentWillReceiveProps(nextProps: Props) {
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