import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import CancelButton from './CancelBeacon';
import NextButton from './NextButton';

// Prepolating Beacon Object for temp data visuals:
const mapStateToProps = (state) => {
  return ({ user: {...state.auth.user, coordinates: {lat: 'XY', long: 'XY'}},
  currentBeacon: { requester: state.auth.user, product: { type: null, attribute: 'blah' },
                  location: 'location', time: 'Time Window', status: 'active',
                  responses: [{ id: 1, responder: 'user1', status: 'Accepted', response: 'Yes' }, { id: 2, responder: 'user2', status: 'Pending', response: 'Yes' }, { id: 3, responder: 'user3', status: 'Declined', response: 'Maybe' }] }
  })
};

class StartBeacon extends React.Component {

  // cancelBeacon = () => {
  //   this.props.navigation.navigate('Profile')
  // }

  render() {
    // console.log(this.props)
    return (
      <View>
        <Text>Welcome `{this.props.user.name}` - Select Product to Continue:</Text>
        // Pad or Tampon Options Here: Input to beaconobj.product ->

        <NextButton nextRoute='Map' nav={this.props.navigation}/>
        <Text>or Cancel Beacon below:</Text>
        <CancelButton nav={this.props.navigation}/>
      </View>
    )
  };
}

export default connect(mapStateToProps)(StartBeacon);
