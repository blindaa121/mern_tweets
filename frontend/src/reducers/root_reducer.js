import { combineReducers } from 'redux'
import session from './session_reducer.js'
import errors from './session_errors_reducer'

const RootReducer = combineReducers({
  session,
  errors
});

export default RootReducer;