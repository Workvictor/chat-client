import styled from 'styled-components';


const Theme={
  sidebarWidth: {
    1200: 240,
    1024: 180,
    768: 140,
  },
};

export const MainLayout=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const SideBarLayout=styled.div`
  width: 320px;
  @media (max-width: 1200px){
    width: 240px;
  }
  //@media (max-width: 1024px){
  //  max-width: 180px;
  //}
  //@media (max-width: 768px){
  //  max-width: 140px;
  //}
`;

export const ContentLayout=styled.div`
  width: calc(100% - 320px);
  @media (max-width: 1200px){
    width: calc(100% - 240px);
  }
  //@media (max-width: 1024px){
  //  width: calc(100% - 180px);
  //}
  //@media (max-width: 768px){
  //  width: calc(100% - 140px);
  //}
`;

export const Layer=styled.div`
  width: 100%;
  height: 100%;
`;

export const Flex=styled(Layer)`
  display: flex;
`;

export const Wrapper=styled(Layer)`
  margin: 0 auto;
  max-width: 1140px;
  @media (max-width: 1200px){
    max-width: unset;
  }
  @media (max-width: 1024px){
    //max-width: 768px;
  }
  @media (max-width: 768px){
    //max-width: 375px;
  }
`;