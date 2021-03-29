import React from 'react';

import Routers from './Routers';

export default function PageTemplate() {
	return (
		<div id="page">
			<main className="container">
				<Routers />
			</main>
		</div>
	);
}
