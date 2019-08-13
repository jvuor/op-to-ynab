import React from 'react';
import { FileOutput, FileSelector } from './components';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import { YNABTransaction } from './interfaces';
import { FileParser } from './utils';

interface AppState {
  YNABTransactions: YNABTransaction[] | null;
}

class App extends React.Component {
  public state: AppState;

  constructor(props: any) {
    super(props);
    this.state = { YNABTransactions: null };
  }

  public acceptFiles(files: FileList) {
    FileParser
      .parse(files[0])
      .then((YNABTransactions) => {
        this.setState({ YNABTransactions });
      });
  }

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
          <p>Anna tiedosto:</p>
          <FileSelector output={(files: FileList) => this.acceptFiles(files)} />
          {
            this.state.YNABTransactions
              ? <FileOutput data={this.state.YNABTransactions} />
              : null
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
