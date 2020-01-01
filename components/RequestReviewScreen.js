import React from 'react';
import { View, Text } from 'react-native';
import CancelButton from './CancelBeacon';
import SelectButton from './SelectButton';
import SubmitButton from './SubmitButton';

class RequestReviewScreen extends React.Component {

  renderContent(){
    return(
      <View><Text>Request Details Here!</Text></View>
    )
  }

  render() {
    return(
      <View>
        {this.renderContent()}
        <SelectButton nextRoute='RequestEditScreen' buttonText='Click to Edit Details' nav={this.props.navigation}/>
        <SubmitButton newRoute='LaunchBeacon' alertMessage='Beacon Has Been Launched' buttonText='Submit Request/Launch Beacon (Leave BeaconStack)' nav={this.props.navigation}/>
        <Text>Continue above or cancel below</Text>
        <CancelButton nav={this.props.navigation}/>
      </View>
    )
  };
}

export default RequestReviewScreen;
