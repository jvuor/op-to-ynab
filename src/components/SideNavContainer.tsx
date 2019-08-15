import React from 'react';

export const SideNavContainer = (props: any) => (
  <nav className="float-right w-48 border border-gray-500">
    {props.children}
  </nav>
);
