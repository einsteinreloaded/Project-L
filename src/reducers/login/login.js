const user = (state = {}, action) => {
  console.log("here");
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isloggedIn:true,
        sessionId: action.id,
        user:action.user
      };
    default:
      return state;
  }
}

export default user;