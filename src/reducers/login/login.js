const user = (state = [], action) => {
  switch (action.type) {
    case 'LOG_IN':
      return [
        ...state,
        login(undefined, action)
      ];
    default:
      return state;
  }
}

function login(state,action) {
  return {
    isloggedIn:true,
    sessionId: action.id,
    user:action.user
  };
}
export default user;