import React       from 'react';
import { connect } from 'react-redux';
import styled      from 'styled-components';


const Wrapper=styled.div`
  padding: 1rem;
  position: relative;
  width: 33rem;
`;

class View extends React.Component{
  render(){
    return (
      <Wrapper>
        {this.props.user.name}
      </Wrapper>
    );
  }
}

export const Body=connect(
  state=>({
    user: state.user
  }),
  dispatch=>({

  })
)(View);