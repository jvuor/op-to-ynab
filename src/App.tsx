import React from 'react';
import { FileSelector } from './components/FileSelector';
import { FileOutput } from './components/FileOutput';

interface AppState {
  files: FileList | null;
}

class App extends React.Component {
  public state: AppState;

  constructor(props: any) {
    super(props);
    this.state = { files: null }
  }

  public acceptFiles (files: FileList) {
    this.setState({ files });
  }
  
  render() {
    return (
      <div>
        <h1>OP:n csv-tiedostot YNABiin</h1>
        <p>Anna tiedosto:</p>
        <FileSelector output={(files: FileList) => this.acceptFiles(files)} />
        <FileOutput input={this.state.files || null} />
      </div>
    );
  }
}

export default App;
