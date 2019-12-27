import { combineReducers } from 'redux';
import authReducer from './authReducer';

// combineReducers sets the state object!! ========
export default combineReducers({
  auth: authReducer
});
