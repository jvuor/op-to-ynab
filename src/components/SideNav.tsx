import React from 'react';
import { SideNavButton } from './SideNavButton';
import { SideNavContainer } from './SideNavContainer';

export const SideNav = () => (
  <SideNavContainer>
    <SideNavButton text="Ohjeet" />
    <SideNavButton text="Tietoa" />
    <SideNavButton text="github" />
  </SideNavContainer>
);
