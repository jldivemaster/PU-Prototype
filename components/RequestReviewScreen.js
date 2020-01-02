import React from 'react';
import { View, Text } from 'react-native';
import CancelButton from './CancelBeacon';
import SelectButton from './SelectButton';
import SubmitButton from './SubmitButton';
import { connect } from 'react-redux';
import { launchBeacon } from '../actions';

const mapStateToProps = (state) => {
  return ({ beacon: { ...state.beacon } })
};

class RequestReviewScreen extends React.Component {
  // TODO:
  // Display state.beacon details
  // Text Input Area for message: Save typing with local state (Does this have it's own submit button???)
  // Render button to open Text Input instead of auto rendering it???
  // Cancel Beacon Button
  // Edit Detail Button for each Item

  // On Edit Detail:
  // jump back to Screen where that item was entered
  // Each Screen will need appropriate logic and resubmission back to this Screen
  // May need to change beacon navigator to a Switch
  // Submit Edit -> Update Beacon Obj, rerender updated Review Screen

  // On Submit:
  // Edit state.beacon.message with text input
  // Edit state.beacon.status to 'active'
  // Trigger Push Notifications to matched users
  // Leave the beacon stack, reflect in bottom tab nav, alert user, and disable Create Beacon tab.

  state = { message: 'additional message' }

  launch(input) {
    this.props.launchBeacon(input)
  };

  onLaunch = () => {
    // console.log(this.state)
    this.launch(this.state.message)
  };

  renderBeacon(){
    let object = this.props.beacon.beaconObj;
    console.log(this.props)
    return(
      <View>
        <Text>User: {object.user.user.name}</Text>
        <Text>My Lat: {object.user.coordinates.lat}, Long: {object.user.coordinates.long}</Text>
        <Text>Product Type: {object.product.type}</Text>
        <Text>Product Attribute: {object.product.attribute}</Text>
        <Text>Meeting Location: {object.location}</Text>
        <Text>Time Window: {object.time}</Text>
      </View>
    )
  };

  render() {
    return(
      <View>
        <Text>Beacon Details: </Text>
        {this.renderBeacon()}
        <SelectButton nextRoute='RequestEditScreen' buttonText='Click to Edit Details' nav={this.props.navigation}/>
        <SubmitButton callback={this.onLaunch} newRoute='LaunchBeacon' alertMessage='Beacon Has Been Launched' buttonText='Submit Request/Launch Beacon (Leave BeaconStack)' nav={this.props.navigation}/>
        <Text>Continue above or cancel below</Text>
        <CancelButton nav={this.props.navigation}/>
      </View>
    )
  };
}

export default connect(mapStateToProps, { launchBeacon })(RequestReviewScreen);