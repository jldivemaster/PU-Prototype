// Action Creators are just functions that return an object with an action TYPE k/v pair,
// and maybe a payload (like the body of a fetch request config object).
import { SIGN_IN, SIGN_OUT, CREATE_MESSAGES, FETCH_MESSAGES,
          FETCH_MESSAGESS, EDIT_MESSAGES, DELETE_MESSAGES } from './types';
// import messages from '../apis/messages';
import history from  '../history';

export const signIn = () => {
  return {
    type: SIGN_IN
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
};

// export const createMessage = formValues => async (dispatch, getState) => {
//   const { userId } = getState().auth;
//   const response = await messages.post('/messages', { ...formValues, userId });
//
//   dispatch({ type: CREATE_MESSAGES, payload: response.data })
//   // Programmatic nav to redirect user to root path after successful creation:
//   history.push('/');
// };
//
// export const fetchMessages = () => async dispatch => {
//   const response = await messages.get('/messages');
//
//   dispatch({ type: FETCH_MESSAGESS, payload: response.data })
// };
//
// export const fetchMessage = (id) => async dispatch => {
//   const response = await messages.get(`/messages/${id}`)
//
//   dispatch({ type: FETCH_MESSAGES, payload: response.data })
// };
//
// export const editMessage = (id, formValues) => async dispatch => {
//   const response = await messages.patch(`/messages/${id}`, formValues);
//
//   dispatch({ type: EDIT_MESSAGES, payload: response.data })
//   history.push('/');
// };
//
// export const deleteMessage = (id) => async dispatch => {
//   await messages.delete(`/messages/${id}`);
//
//   dispatch({ type: DELETE_MESSAGES, payload: id });
//   history.push('/');
// }
