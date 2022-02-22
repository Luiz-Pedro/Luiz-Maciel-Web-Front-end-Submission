
import {Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon} from '../styles/components/main';
import { ProfilePage } from './profilePage';

export function Main(){
    return(
        <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>
              <ProfileInfo>
                  <strong>Luiz Pedro</strong>
                  <span>442 posts</span>
              </ProfileInfo>
          </Header>

          
          <ProfilePage />


          <BottomMenu>
            <HomeIcon className='active'/>
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
          </BottomMenu>
        </Container>
    );
}