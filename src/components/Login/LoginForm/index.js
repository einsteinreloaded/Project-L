import React from 'react';
import { connect } from 'react-redux';
import { login } from 'reducers/login/action';
import axios from 'axios';

const serverUrl="http://localhost:8900/?";

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
    axios.get(serverUrl+"uname="+this.state.username+"&pword="+this.state.password).then((res)=>{
        console.log(res.data);
        //if(data.authTokenId){
        this.props.login({...this.state,id: res.data.authTokenId, user: res.data.firstName});
    }).catch((err)=>{
        console.log(err);
    });
    
  }

  render() {
    if(this.props.isloggedIn){
      return(
        <div>
          <span>Hi {this.props.user}</span>
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
export default connect(({ user }) => ({ ...user }),{ login })(LoginForm);
