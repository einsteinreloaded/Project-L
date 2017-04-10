import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password:''};

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="uname">
            UserName:
            <input type="text" name="uname" value={this.state.username} class="form-control" onChange={this.handleUserNameChange} />
            </label>
        </div>
        <div class="form-group">
            <label for="pword">
            Password:
            <input type="password" name="pword" class="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
            </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
