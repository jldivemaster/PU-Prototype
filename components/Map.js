import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CancelBeacon from './CancelBeacon';

class Map extends Component {

  render () {
    return (
      <View>
        <Text>Look at me, Mom! I'm a map!</Text>
        <CancelBeacon nav={this.props.navigation}/>
      </View>
    )
  }
};

export default Map;
