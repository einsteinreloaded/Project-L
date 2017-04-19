let nextTodoId = 0;
export const login = (state) => ({
  type: 'LOG_IN',
  id: nextTodoId++,
  user: state.firstname,
  ...state
})
