import React from 'react';
import { View, Text } from 'react-native';
import CancelButton from './CancelBeacon';
import NextButton from './NextButton';

class LocationListScreen extends React.Component {
  // In this screen:
  // if view stores, render store list
  // if set location, render location list and dropdown/search components.
  renderList() {
    if(this.props.viewStores){
      return(
        <Text>List of Stores</Text>
    )} else {
      return (
        <>
          <Text>List of Locations to Meet</Text>
          <Text>DropDown/Search Options</Text>
        </>
    )}
  };

  render() {
    return(
      <View>
        {this.renderList()}
        <NextButton nextRoute='RequstTimeScreen' nav={this.props.navigation}/>
        <Text>Continue above or cancel below</Text>
        <CancelButton nav={this.props.navigation}/>
      </View>
    )
  };
}

export default LocationListScreen;
