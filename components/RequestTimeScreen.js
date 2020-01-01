import React from 'react';
import { View, Text } from 'react-native';
import CancelButton from './CancelBeacon';
import NextButton from './NextButton';

class RequestTimeScreen extends React.Component {

  renderContent(){
    return(
      <View><Text>Select Time Window on this Screen!</Text></View>
    )
  }

  render() {
    return(
      <View>
        {this.renderContent()}
        <NextButton nextRoute='RequestReviewScreen' nav={this.props.navigation}/>
        <Text>Continue above or cancel below</Text>
        <CancelButton nav={this.props.navigation}/>
      </View>
    )
  };
}

export default RequestTimeScreen;
