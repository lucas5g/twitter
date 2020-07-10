import React from 'react';

 import { Container, Wrapper } from './styles';
 import Main from '../Main'

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
         {/* <Menubar> */}
          <Main />
        {/* </Menubar>  */}
      </Wrapper>
    </Container>  
  )
}

export default Layout;