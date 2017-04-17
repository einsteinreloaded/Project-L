const user = (state = {}, action) => {
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