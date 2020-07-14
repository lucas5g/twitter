import React from 'react';

import { Container,
  Header,
  BackIcon,
  ProfileInfo,
  ButtomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon 

} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Lucas de sousa</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ButtomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ButtomMenu>
    </Container>
  )
}

export default Main;