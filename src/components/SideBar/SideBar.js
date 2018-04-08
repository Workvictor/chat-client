import React       from 'react';
import { connect } from 'react-redux';
import styled      from 'styled-components';


const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  position: relative;
  background-color: #666666;
  height: 100%;
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

export const SideBar=connect(
  state=>({
    user: state.user
  }),
  dispatch=>({})
)(View);