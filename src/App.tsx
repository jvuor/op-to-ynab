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
        <h1>OP:n csv-tiedostot YNABiin</h1>
        <p>Anna tiedosto:</p>
        <FileSelector output={(files: FileList) => this.acceptFiles(files)} />
        {
          this.state.YNABTransactions
          ? <FileOutput data={this.state.YNABTransactions} />
          : null
        }
      </div>
    );
  }
}

export default App;
