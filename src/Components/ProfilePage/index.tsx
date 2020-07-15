import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage

} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>

        <h1>Lucas de Sousa</h1>
        <h2>@_lucasdesousa19</h2>

        <p>
          Estudante de JavaScript
        </p>

        <ul>
          <li>
            <LocationIcon />
            Belo Horizonte, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de junho de 2001
          </li>
        </ul>
      </ProfileData>
    </Container>  
  );
}

export default ProfilePage;