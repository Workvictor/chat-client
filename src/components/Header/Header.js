import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';


const MenuWrapper=styled.div`
  
`;

const StyledLink=styled(NavLink)`
  color: #fff;
  &:active{
    color: #a55cd9;
  }
`;


export class View extends React.Component{
  render(){
    return (
      <MenuWrapper>
        <StyledLink
          to={`/`}
          exact
          // activeClassName={`selected-link`}
        >
          Home
        </StyledLink>
        <StyledLink
          to={`/chats`}
          // activeClassName={`selected-link`}
        >
          Start chatting
        </StyledLink>
        <StyledLink
          to={`/login`}
          // activeClassName={`selected-link`}
        >
          Login
        </StyledLink>
      </MenuWrapper>
    );
  }
}