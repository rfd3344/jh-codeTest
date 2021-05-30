import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SocialCard from '@/pages/SocialCard';
import NotFound from '@/pages/NotFound';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={SocialCard} />

    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routers;
