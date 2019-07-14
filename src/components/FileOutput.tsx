import React from "react";

interface FileOutputProps {
  input: FileList | null;
}

export class FileOutput extends React.Component<FileOutputProps> {
  render() {
    return (
      <div>
        FileOutput
      </div>
    )
  }
}
