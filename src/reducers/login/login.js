
import { connect } from 'react-redux';


const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
        if(action.id){
            console.log("logged in");
            return {...state, ...action, isloggedIn:true};
        }

    default:
      return state;
  }
}

export default user;