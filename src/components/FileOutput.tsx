import React from "react";
import { YNABTransaction } from "../interfaces";
import { CSVLink } from "react-csv";
import { YNABHeader } from "../models";

interface FileOutputProps {
  data: YNABTransaction[];
}

export class FileOutput extends React.Component<FileOutputProps> {
  render() {
    return (
      <div>
        {this.props.data 
          ? <CSVLink 
              filename='YNAB.csv'
              headers={YNABHeader} 
              data={this.props.data}
            >
              Lataa
            </CSVLink> 
          : null}
      </div>
    )
  }
}
