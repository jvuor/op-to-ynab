import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Convert } from './components/Convert';

export const Routing = () => (
  <Route path="/" exact={true} component={Convert} />
);

export { Router, Link, Route };
