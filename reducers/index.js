import { combineReducers } from 'redux';
import authReducer from './authReducer';
import beaconReducer from './beaconReducer';

// combineReducers sets the state object!! ========
// Call state.auth to return user Object; Call state.beacon to return beacon object;
export default combineReducers({
  auth: authReducer,
  beacon: beaconReducer
});
