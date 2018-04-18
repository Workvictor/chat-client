import React       from 'react';
import styled      from 'styled-components';
import {
  Flex,
  SideBarLayout,
  ContentLayout
}                  from '../Layout';
import { SideBar } from '../SideBar';
import { Body }    from '../Body';


export class Chats extends React.Component{
  render(){
    return (
      <Flex>
        <SideBarLayout>
          <SideBar/>
        </SideBarLayout>
        <ContentLayout>
          <Body/>
        </ContentLayout>
      </Flex>
    );
  }
}