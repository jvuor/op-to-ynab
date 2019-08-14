import React from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import { Router, Routing } from './Routing';

class App extends React.Component {
  public render() {
    return (
      <Router>
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
          <Routing />
        </Container>
      </Router>
    );
  }
}

export default App;
