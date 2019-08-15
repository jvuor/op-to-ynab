import React, { ReactNode } from 'react';

interface AnchorProps {
  target: string;
  children: ReactNode;
}

export const Anchor = (props: AnchorProps) => (
  <a
    href={props.target}
    target="_blank"
    className="text-blue-800 underline"
  >
    {props.children}
  </a>
);
