import { combineReducers } from 'redux';
import user from './login';
import { routerReducer } from 'react-router-redux'

const lapp =   combineReducers({
    user,
    routing: routerReducer
  })

export default lapp