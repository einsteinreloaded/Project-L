var axios = require("axios");
import { connect } from 'react-redux';

const serverUrl="http://localhost:8900/?"
const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      axios.get(serverUrl+"uname="+action.username+"&pword="+action.password).then((res)=>{
          console.log(res.data);
          //if(data.authTokenId){
            dispatch({type: 'LOGGED_IN', id: res.data.authTokenId, user: res.data.firstName});
//}
      }).catch((err)=>{
          console.log(err);
      });
      return state;

    case 'LOGGED_IN':
      return{
        ...state,
        isloggedIn:true,
        sessionId: action.id,
        user: action.user
      };

    default:
      return state;
  }
}

export default (user);