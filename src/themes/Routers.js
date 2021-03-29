import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '_pages/Home';
import Todos from '_pages/Todos/index';
import NotFound from '_pages/NotFound';

const Routers = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/todos" component={Todos} />

		<Route path="*" component={NotFound} />
	</Switch>
);
export default Routers;
