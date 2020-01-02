import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({ beacon: state.beacon.beaconObj })
};

class ActiveBeaconScreen extends React.Component {
  // TODO:
  // Render beacon details
  // Hot render responses as they are submitted (sorted by 'Yes or Maybe')
  // Render # of No responses??

  // Each response can be selected to open to Detailed View
  // Cancel Beacon button 

  renderResponses() {
    // return <Text>Responses</Text>
    return this.props.beacon.responses.map((resp, key) => {
      return (
        <View key={resp.id}>
          <Text>----------------------------------------------</Text>
          <Text>Responder: {resp.responder}</Text>
          <Text>They said: {resp.response}</Text>
          <Text>Target Time: {resp.targetTime}</Text>
          <Text>Status: {resp.status}</Text>
          <Text>----------------------------------------------</Text>
        </View>
      )
    })
  };

  render() {
    // console.log(this.props.beacon)
    const beacon = this.props.beacon;
    return (
      <View>
        <Text>Active Beacon Details</Text>
        <Text>Product Requested: {beacon.product.type}</Text>
        <Text>Location: {beacon.location}</Text>
        <Text>Time: {beacon.time}</Text>
        <Text>Message: {beacon.message}</Text>
        <Text>Status Indicator: {beacon.status}</Text>
        <Text>Hot Render List of Responses (Each with Button to View Response)</Text>
        {this.renderResponses()}
      </View>
    )
  };
}

export default connect(mapStateToProps)(ActiveBeaconScreen);
