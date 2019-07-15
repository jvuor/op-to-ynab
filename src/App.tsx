import React from 'react';
import { FileOutput, FileSelector } from './components';
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
      <div>
        <header>
          <div className="headline">
            Osuuspankin tilitapahtumien käsittelijä
          </div>
          <div className="subheader">
            Muokkaa tapahtumat You Need A Budgettia varten
          </div>
        </header>
        <div className="container">
          <p>Anna tiedosto:</p>
          <FileSelector output={(files: FileList) => this.acceptFiles(files)} />
          {
            this.state.YNABTransactions
              ? <FileOutput data={this.state.YNABTransactions} />
              : null
          }
        </div>
      </div>
    );
  }
}

export default App;
