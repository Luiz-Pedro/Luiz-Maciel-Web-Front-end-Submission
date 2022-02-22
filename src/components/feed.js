
import {Container, Tab, Posts} from '../styles/components/feed';
//import {Post} from '../post'

export function Feed(){
    return(
        <Container>
          <Tab>Posts</Tab>
          <Posts>
              {/* <Post />
              <Post />
              <Post /> */}
          </Posts>
        </Container>
    );
}