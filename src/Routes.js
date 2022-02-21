import React from 'react';
import { Switch } from 'react-router-dom';
import AppliedRoute from './AppliedRoute';
import Home from './Home';
import Login from './components/login/login';
import Signup from './components/signup/signup';

export default ({ childProps }) => (
	<Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
		<AppliedRoute path="/login" exact component={Login} props={childProps} />
		<AppliedRoute path="/signup" exact component={Signup} props={childProps} />
	</Switch>
);
