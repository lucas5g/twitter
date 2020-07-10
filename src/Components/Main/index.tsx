import React from 'react';

import { Container, Header, BackIcon, ProfileInfo  } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Lucas de sousa</strong>
          <strong>612 Tweets</strong>
        </ProfileInfo>
      </Header>

      {/* <ButtomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ButtomMenu> */}
    </Container>
  )
}

export default Main;