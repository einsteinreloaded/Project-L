import React from 'react';
import { connect } from 'react-redux';
import { login } from 'reducers/login/action';
import LoginServices from 'services/LoginService';
import { browserHistory } from 'react-router'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    LoginServices.getAuthentication(this.username.value,this.password.value).then((res)=>{
        console.log(res.data);
        this.props.login({id: res.data.authTokenId, user: res.data.firstName});
       

            browserHistory.push('/home');
    }).catch((err)=>{
        console.log(err);
    });
  }

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="uname">
          UserName:
          <input type="text" name="uname" className="form-control" ref={(input) => this.username = input} />
          </label>
        </div>
        <div className="form-group">
            <label htmlFor="pword">
            Password:
            <input type="password" name="pword" className="form-control" ref={(input) => this.password = input} />
            </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default connect(({ user }) => ({ ...user }),{ login })(LoginForm);
