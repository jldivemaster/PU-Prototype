import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CancelButton from './CancelBeacon';
import SelectButton from './SelectButton';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({ beacon: state.beacon, user: state.auth })
};

class Map extends Component {

  render () {
    console.log('map view', this.props)
    // Conditional render for stores/meeting locations.
    return (
      <View>
        <Text>I'm the Map View! User selects option to find store or continue with beacon at this screen.</Text>
        <SelectButton nextRoute='LocationListScreen' buttonText='View List of Stores' nav={this.props.navigation}/>
        <SelectButton nextRoute='RequestTimeScreen' buttonText='Select Meeting Location (rerender Map first then nav forward)' nav={this.props.navigation}/>
        <Text>Continue above or cancel below</Text>
        <CancelButton nav={this.props.navigation}/>
      </View>
    )
  }
};

export default connect(mapStateToProps)(Map);
