import { CREATE_BEACON, EDIT_BEACON, LAUNCH_BEACON, DELETE_BEACON } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
  beaconObj: {
      user: null,
      product: { type: null, attribute: 'other attribute' },
      location: 'location', time: 'Time Window', status: 'pending', message: '',
      responses: [{ id: 1, responder: 'user1', targetTime: '10:10', status: 'Accepted', response: 'Yes' }, { id: 2, responder: 'user2', targetTime: '10:05', status: 'Pending', response: 'Yes' }, { id: 3, responder: 'user3', targetTime: '10:20', status: 'Declined', response: 'Maybe' }]
  }
};

// ({ user: {...state.auth.user, coordinates: {lat: 'XY', long: 'XY'}},
// beacon: { requester: state.auth.user, product: { type: null, attribute: 'blah' },
//                 location: 'location', time: 'Time Window', status: 'pending',
//                 responses: [{ id: 1, responder: 'user1', status: 'Accepted', response: 'Yes' }, { id: 2, responder: 'user2', status: 'Pending', response: 'Yes' }, { id: 3, responder: 'user3', status: 'Declined', response: 'Maybe' }] }
// })

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_BEACON:
      return { ...state, beaconObj: {...state.beaconObj, user: {...action.payload.user, coordinates: {lat: 'XY', long: 'XY'}}, product: {...state.beaconObj.product, type: action.payload.productType } } };
    case EDIT_BEACON:
    // Make dynamic for keys and values. This will  probably be called several times.
      return { ...state, beaconObj: {...state.beaconObj } };
    case LAUNCH_BEACON:
      return { ...state, beaconObj: {...state.beaconObj, message: action.payload, status: 'active' } };
    case DELETE_BEACON:
      return { ...state, beaconObj: {}};
    default:
      return state;
  }
};
