
import { connect } from 'react-redux';


const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
        if(action.id){
            console.log("logged in");
            this.props.router.push('/home');
            return {...state, ...action, isloggedIn:true};
        }

    default:
      return state;
  }
}

export default user;