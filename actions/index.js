// Action Creators are just functions that return an object with an action TYPE k/v pair,
// and maybe a payload (like the body of a fetch request config object).
import { SIGN_IN, SIGN_OUT, CREATE_BEACON, FETCH_BEACONS,
          FETCH_BEACON, EDIT_BEACON, DELETE_BEACON } from './types';
// import beacons from '../apis/beacons';
import history from  '../history';

export const signIn = (user) => {
  return {
    type: SIGN_IN,
    payload: user
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
};

export const createBeacon = productType => async (dispatch, getState) => {
  // const { userId } = getState().auth;
  // const response = await beacons.post('/beacons', { ...formValues, userId });
  // const initBeaconObj = {...getState().beacon, user: getState().auth, product: { type: value } }
  dispatch({ type: CREATE_BEACON, payload: productType })
};

// export const fetchBeacons = () => async dispatch => {
//   const response = await beacons.get('/beacons');
//
//   dispatch({ type: FETCH_BEACONS, payload: response.data })
// };

// export const fetchBeacon = (id) => async dispatch => {
//   const response = await beacon.get(`/beacons/${id}`)
//
//   dispatch({ type: FETCH_BEACON, payload: response.data })
// };

// export const editBeacon = (id, formValues) => async dispatch => {
  // const response = await beacons.patch(`/beacons/${id}`, formValues);

  // dispatch({ type: EDIT_BEACON, payload: response.data })
  // history.push('/');
// };
export const launchBeacon = (input) => dispatch => {
  dispatch({ type: EDIT_BEACON, payload: input })
}

export const deleteBeacon = (id) => async dispatch => {
  // await beacons.delete(`/beacons/${id}`);

  dispatch({ type: DELETE_BEACON, payload: id });
  // history.push('/');
}
