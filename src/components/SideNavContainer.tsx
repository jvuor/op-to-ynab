import React from 'react';

export const SideNavContainer = (props: any) => (
  <nav className="absolute right-0 w-48 border border-gray-500">
    {props.children}
  </nav>
);
