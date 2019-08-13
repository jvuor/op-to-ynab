import React from 'react';

export const SideNavButton = (props: any) => (
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
);
