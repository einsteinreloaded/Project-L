import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import $ from 'jquery';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducer from './reducers/login';
import LoginContainer from 'containers/LoginContainer' ;
import HomePageContainer from 'containers/HomePageContainer' ;
/**
 * React router will wrap your App in the future
 * Redux will supply store to your App
 */
// Add the reducer to your store on the `routing` key
const store = createStore(reducer);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
          <Route path="/login" component={LoginContainer} />
          <Route path="/home" component={HomePageContainer} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('lapp')
);
