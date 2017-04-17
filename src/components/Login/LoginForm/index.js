import React from 'react';
import { connect } from 'react-redux'
import { login } from 'reducers/login';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password:'', isloggedin: false, user: ''};

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(event) {
    this.setState({username: event.target.value});
  }
   handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log("inside submit");
    event.preventDefault();
    this.props.dispatch(login(this.state));
  }

  render() {
    console.log(this.state);
    if(this.state.isloggedin){
      return(
        <div>
          <span>Hi {this.state.user}</span>
        </div>
      )
    }
    return (
      <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="uname">
            UserName:
            <input type="text" name="uname" value={this.state.username} className="form-control" onChange={this.handleUserNameChange} />
            </label>
        </div>
        <div className="form-group">
            <label htmlFor="pword">
            Password:
            <input type="password" name="pword" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
            </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default connect()(LoginForm)