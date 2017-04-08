import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import $ from 'jquery';
/**
 * React router will wrap your App in the future
 * Redux will supply store to your App
 */

ReactDOM.render(
  <App />,
  document.getElementById('lapp')
);
