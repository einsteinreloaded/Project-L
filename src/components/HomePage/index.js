import React from 'react';
import { connect } from 'react-redux';

const HomePage = (props) => (
  <div>
    <span>Hi {props.user}</span>
  </div>
);

export default connect(({ user }) => ({ ...user }),{ })(HomePage);