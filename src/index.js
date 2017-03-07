import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'

// Components
import TrailsMix from './components/environments/TrailsMix';

render(
  <Provider store={store}>
    <TrailsMix />
  </Provider>,
  document.getElementById('root')
);