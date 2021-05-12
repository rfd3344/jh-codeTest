import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import AnimalForm from '@/pages/AnimalForm';
import NotFound from '@/pages/NotFound';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/animal-form" component={AnimalForm} />

    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routers;
