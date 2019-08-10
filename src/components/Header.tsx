import React from 'react';

const title = (props: any) => (
  <h2 className="text-white text-4xl m-2">
    {props.children}
  </h2>
);

const subtitle = (props: any) => (
  <h4 className="text-gray-300 md:text-2xl m-2">
    {props.children}
  </h4>
);

export class Header extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public static Title = title;
  public static Subtitle = subtitle;

  private headerStyle = {
    backgroundImage: 'url("https://unsplash.it/2000/256?image=538")',
  };

  private dimmerStyle = {
    background: 'linear-gradient(to bottom, transparent 0%, black 100%)',
  };

  public render() {
    return (
      <div className="bg-auto h-64" style={this.headerStyle}>
        <div className="flex flex-col justify-end h-full text-right" style={this.dimmerStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
