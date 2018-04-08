import React       from 'react';
import { connect } from 'react-redux';
import styled      from 'styled-components';
import { Input }   from '../Input';
import { Button }  from '../Button';


const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  position: relative;
  background-color: #a8a8a8;
  height: 100%;
`;

const Footer=styled.div`
  height: 120px;
  width: 100%;
`;

const StyledInput=styled(Input)`
  display: block;
  width: 100%;
  margin: 12px 0;
`;

const BodyWrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(100% - 120px);
  width: 100%;
`;

class View extends React.Component{
  render(){
    return (
      <Wrapper>
        <BodyWrapper>
          message
        </BodyWrapper>
        <Footer>
          <StyledInput/>
          <Button primary>send</Button>
        </Footer>
      </Wrapper>
    );
  }
}

export const Body=connect(
  state=>({
    user: state.user
  }),
  dispatch=>({})
)(View);