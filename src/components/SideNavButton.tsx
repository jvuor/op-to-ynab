import React from 'react';
import { Link } from '../Routing';

export const SideNavButton = (props: any) => (
  <Link to={props.link}>
    <div className="
      bg-gray-300
      hover:bg-gray-700
      text-black
      font-semibold
      hover:text-white
      py-2
      px-4
      border
      uppercase
      w-full"
    >
      {props.text}
    </div>
  </Link>
);
