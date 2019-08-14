import React from 'react';
import { SideNavButton } from './SideNavButton';
import { SideNavContainer } from './SideNavContainer';

export const SideNav = () => (
  <SideNavContainer>
    <SideNavButton text="Muunnin" link="/" />
    <SideNavButton text="Ohjeet" link="tutorial" />
    <SideNavButton text="Tietoa" link="about" />
  </SideNavContainer>
);
