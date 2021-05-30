import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Theme from '@/themes/Theme';
import rootReducer from './reducers';

// Redux initialze
const store = createStore(rootReducer);


export default ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Theme />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
