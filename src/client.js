import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import $ from 'jquery';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/login';
/**
 * React router will wrap your App in the future
 * Redux will supply store to your App
 */
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('lapp')
);
