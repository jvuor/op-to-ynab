import React from 'react';
import { Container } from './components/Container';
import { Convert } from './components/Convert';
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header>
          <Header.Title>
            Osuuspankin tilitapahtumien käsittelijä
          </Header.Title>
          <Header.Subtitle>
            Muokkaa tapahtumat You Need A Budgettia varten
          </Header.Subtitle>
        </Header>
        <Container>
          <SideNav />
          <Convert />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
