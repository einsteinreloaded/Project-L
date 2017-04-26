import React from 'react';
import { connect } from 'react-redux';

const HomePage = () => (
        <div>
          <span>Hi {this.props.user}</span>
        </div>
);

export default connect(({ user }) => ({ ...user }),{ })(HomePage);