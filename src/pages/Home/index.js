import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.less';

export default function Home() {
	return (
		<section id="home">
			<NavLink to="/"> Home </NavLink>
			<NavLink to="/todos"> Todos test </NavLink>
		</section>
	);
}
