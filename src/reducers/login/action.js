let nextTodoId = 0;
export const login = (state) => ({
  type: 'LOG_IN',
  id: state.id,
  user: state.user
})
