import React from 'react';
import { SideNavButton } from './SideNavButton';

export const SideNav = () => (
  <div className="absolute right-0 w-48 border border-gray-500">
    <SideNavButton text="Ohjeet" />
    <SideNavButton text="Tietoa" />
    <SideNavButton text="github" />
  </div>
);
