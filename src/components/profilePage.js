
import {Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage} from '../styles/components/profilePage';
import {Feed} from '../components/feed'

export function ProfilePage(){
    return(
        <Container>
          <Banner>
              <Avatar />
          </Banner>
          <ProfileData>
              <h1>Luiz Pedro</h1>
              <h2>@luiizpedro</h2>
              <p>Front end developer</p>
              <ul>
                  <li><LocationIcon /> Belo Horizonte, Brazil</li>
                  <li><CakeIcon /> Joined Posterr in March 25, 2021</li>
              </ul>
              <Followage>
                  <span>following <strong>98</strong></span>
                  <span><strong>873</strong> followers</span>
              </Followage>
          </ProfileData>
          <Feed />
        </Container>
    );
}