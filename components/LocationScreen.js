import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CancelButton from './CancelBeacon';
import SelectButton from './SelectButton';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({ beacon: state.beacon, user: state.auth })
};

class LocationScreen extends Component {
  // TODO:
  // Render map with user location (show stores??)
  // Show # of nearby users

  // If user selects to view stores -> rerender with Dropdown options, buttons change accordingly
  // Else If user selects to continue request -> rerender with meeting location options, buttons change accordingly

  // Probably put Map & List Views within same LocationScreen. On stores selection, prompt user to cancel beacon and continue with full-screen map?
  // On selection of location (from either Map or List View), save to Beacon Object and navigate to Request Time Screen.
  // Cancel Beacon button

  render () {
    // console.log('location view', this.props)
    // Conditional render for stores/meeting locations.
    return (
      <View>
        <Text>I'm the Location View Screen! User selects option to find store or continue with beacon at this screen.</Text>
        <SelectButton nextRoute='LocationListScreen' buttonText='View List of Stores' nav={this.props.navigation}/>
        <SelectButton nextRoute='RequestTimeScreen' buttonText='Select Meeting Location (rerender Location View first then nav forward)' nav={this.props.navigation}/>
        <Text>Continue above or cancel below</Text>
        <CancelButton nav={this.props.navigation}/>
      </View>
    )
  }
};

export default connect(mapStateToProps)(LocationScreen);
