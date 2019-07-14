import React from 'react';
import { CSVLink } from 'react-csv';
import { YNABTransaction } from '../interfaces';
import { YNABHeader } from '../models';

interface FileOutputProps {
  data: YNABTransaction[];
}

export const FileOutput: React.FC<FileOutputProps> = (props) => {
  return (
    <div>
      {props.data
        ? <CSVLink
            filename="YNAB.csv"
            headers={YNABHeader}
            data={props.data}
          >
            Lataa
          </CSVLink>
        : null}
    </div>
  );
};
