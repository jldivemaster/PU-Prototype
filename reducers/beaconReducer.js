import { CREATE_BEACON, EDIT_BEACON, LAUNCH_BEACON, CANCEL_BEACON } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
  beaconObj: {}
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, user: null };
    case CREATE_BEACON:
      return { ...state, beaconObj: { user: state.auth.user }}
    default:
      return state;
  }
};
