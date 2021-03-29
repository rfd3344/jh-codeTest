import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './style.less';
import PageTheme from '_src/themes/PageTheme';
import rootReducer from './reducers';

// Redux initialze
const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PageTheme />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
