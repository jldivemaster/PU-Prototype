import React from 'react';
import { View, Text } from 'react-native';
import CancelButton from './CancelBeacon';
import NextButton from './NextButton';
import SelectButton from './SelectButton';

class RequestEditScreen extends React.Component {

  renderContent(){
    return(
      <View><Text>Edit Request Details Here!</Text></View>
    )
  }

  render() {
    return(
      <View>
        {this.renderContent()}
        <SelectButton nextRoute='RequestReviewScreen' buttonText='Save Changes' nav={this.props.navigation}/>
        <Text>Continue above or cancel below</Text>
        <SelectButton nextRoute='RequestReviewScreen' buttonText='Cancel Changes' nav={this.props.navigation}/>
        <CancelButton nav={this.props.navigation}/>
      </View>
    )
  };
}

export default RequestEditScreen;
