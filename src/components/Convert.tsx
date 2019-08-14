import React from 'react';
import { FileOutput, FileSelector } from '.';
import { YNABTransaction } from '../interfaces';
import { FileParser } from '../utils';

interface ConvertState {
  YNABTransactions: YNABTransaction[] | null;
}

export class Convert extends React.Component {
  public state: ConvertState;

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
        <p>Anna tiedosto:</p>
        <FileSelector output={(files: FileList) => this.acceptFiles(files)} />
        {
          this.state.YNABTransactions
            ? <FileOutput data={this.state.YNABTransactions} />
            : null
        }
      </React.Fragment>
    );
  }
}
