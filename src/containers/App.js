import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/Header';
import LoginForm from 'components/Login/LoginForm';
/**
 * Will be useful to supply some common data that needs to be available for all components.
 * eg: i18n and config.
 * You can supply those using React 'context'
 * Read it here https://facebook.github.io/react/docs/context.html
 * 
 * Also sometime we will use Redux 'connect' to supply some dat to App.
 * This is the reason why I have put App inside 'containers'.
 */

const App = () => (
  <div>
    <Header />
    <LoginForm/>
  </div>
);

export default App;
