import { connect } from 'react-redux';

const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
        if(action.id){
            return {...state, ...action, isloggedIn:true};
        }
        break;
    case 'FETCH_DATA':
        return {...state,...action};

    default:
      return state;
  }
}

export default user;