import React from 'react';

interface FileSelectorProps {
  output: (files: FileList) => void;
}

export class FileSelector extends React.Component<FileSelectorProps> {
  constructor(props: FileSelectorProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(selectorFiles: FileList | null) {
    if (selectorFiles) {
      this.props.output(selectorFiles);
    }
  }

  public render() {
    return (
      <div>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => this.handleChange(e.target.files)}
        />
      </div>
    );
  }
}
