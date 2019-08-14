import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { About } from './components/About';
import { Convert } from './components/Convert';
import { Tutorial } from './components/Tutorial';

export const Routing = () => (
  <React.Fragment>
    <Route path="/" exact={true} component={Convert} />
    <Route path="/about" component={About} />
    <Route path="/tutorial" component={Tutorial} />
  </React.Fragment>
);

export { Router, Link, Route };
