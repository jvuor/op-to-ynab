import React from 'react';
import { Anchor } from './Anchor';

export const About = () => (
  <React.Fragment>
    <p>
      Ohjelman kehitti <Anchor target="https://www.jussi.app">Jussi Vuorinen</Anchor>.
    </p>
    <p>
      Lähdekoodi on julkaistu <Anchor target="https://github.com/jvuor/op-to-ynab">GitHubissa</Anchor>.
    </p>
  </React.Fragment>
);
