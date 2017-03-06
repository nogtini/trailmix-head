import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);