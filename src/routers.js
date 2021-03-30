import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Front Pages
import PhotosSearch from '_views/PhotosSearch';
import NotFound from '_views/NotFound';

const Routers = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={PhotosSearch} />
			<Route path="*" component={NotFound} />
		</Switch>
	</Router>
);
export default Routers;
